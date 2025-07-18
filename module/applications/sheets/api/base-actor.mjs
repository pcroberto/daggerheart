import DHBaseActorSettings from './actor-setting.mjs';
import DHApplicationMixin from './application-mixin.mjs';

const { ActorSheetV2 } = foundry.applications.sheets;

/**@typedef {import('@client/applications/_types.mjs').ApplicationClickAction} ApplicationClickAction */

/**
 * A base actor sheet extending {@link ActorSheetV2} via {@link DHApplicationMixin}
 * @extends ActorSheetV2
 * @mixes DHSheetV2
 */
export default class DHBaseActorSheet extends DHApplicationMixin(ActorSheetV2) {
    /** @inheritDoc */
    static DEFAULT_OPTIONS = {
        classes: ['actor'],
        position: {
            width: 480
        },
        form: {
            submitOnChange: true
        },
        actions: {
            openSettings: DHBaseActorSheet.#openSettings
        },
        dragDrop: []
    };

    /**@type {typeof DHBaseActorSettings}*/
    #settingSheet;

    /**@returns {DHBaseActorSettings|null} */
    get settingSheet() {
        const SheetClass = this.document.system.metadata.settingSheet;
        return (this.#settingSheet ??= SheetClass ? new SheetClass({ document: this.document }) : null);
    }

    /**@inheritdoc */
    async _prepareContext(_options) {
        const context = await super._prepareContext(_options);
        context.isNPC = this.document.isNPC;
        return context;
    }

    /**
     * Open the Actor Setting Sheet
     * @type {ApplicationClickAction}
     */
    static async #openSettings() {
        await this.settingSheet.render({ force: true });
    }
}
