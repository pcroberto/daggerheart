import { updateActorTokens } from '../../helpers/utils.mjs';

export default class BeastformEffect extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            characterTokenData: new fields.SchemaField({
                tokenImg: new fields.FilePathField({
                    categories: ['IMAGE'],
                    base64: false,
                    nullable: true
                }),
                tokenRingImg: new fields.FilePathField({
                    initial: 'icons/svg/mystery-man.svg',
                    categories: ['IMAGE'],
                    base64: false
                }),
                tokenSize: new fields.SchemaField({
                    height: new fields.NumberField({ integer: true, nullable: true }),
                    width: new fields.NumberField({ integer: true, nullable: true })
                })
            }),
            advantageOn: new fields.ArrayField(new fields.StringField()),
            featureIds: new fields.ArrayField(new fields.StringField()),
            effectIds: new fields.ArrayField(new fields.StringField())
        };
    }

    async _preDelete() {
        if (this.parent.parent.type === 'character') {
            const update = {
                height: this.characterTokenData.tokenSize.height,
                width: this.characterTokenData.tokenSize.width,
                texture: {
                    src: this.characterTokenData.tokenImg
                },
                ring: {
                    subject: {
                        texture: this.characterTokenData.tokenRingImg
                    }
                }
            };

            await updateActorTokens(this.parent.parent, update);

            await this.parent.parent.deleteEmbeddedDocuments('Item', this.featureIds);
            await this.parent.parent.deleteEmbeddedDocuments('ActiveEffect', this.effectIds);
        }
    }
}
