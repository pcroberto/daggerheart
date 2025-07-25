export const range = {
    self: {
        id: 'self',
        short: 's',
        label: 'DAGGERHEART.CONFIG.Range.self.name',
        description: 'DAGGERHEART.CONFIG.Range.self.description',
        distance: 0
    },
    melee: {
        id: 'melee',
        short: 'm',
        label: 'DAGGERHEART.CONFIG.Range.melee.name',
        description: 'DAGGERHEART.CONFIG.Range.melee.description',
        distance: 1
    },
    veryClose: {
        id: 'veryClose',
        short: 'vc',
        label: 'DAGGERHEART.CONFIG.Range.veryClose.name',
        description: 'DAGGERHEART.CONFIG.Range.veryClose.description',
        distance: 3
    },
    close: {
        id: 'close',
        short: 'c',
        label: 'DAGGERHEART.CONFIG.Range.close.name',
        description: 'DAGGERHEART.CONFIG.Range.close.description',
        distance: 10
    },
    far: {
        id: 'far',
        short: 'f',
        label: 'DAGGERHEART.CONFIG.Range.far.name',
        description: 'DAGGERHEART.CONFIG.Range.far.description',
        distance: 20
    },
    veryFar: {
        id: 'veryFar',
        short: 'vf',
        label: 'DAGGERHEART.CONFIG.Range.veryFar.name',
        description: 'DAGGERHEART.CONFIG.Range.veryFar.description',
        distance: 30
    }
};

export const burden = {
    oneHanded: {
        value: 'oneHanded',
        label: 'DAGGERHEART.CONFIG.Burden.oneHanded'
    },
    twoHanded: {
        value: 'twoHanded',
        label: 'DAGGERHEART.CONFIG.Burden.twoHanded'
    }
};

export const damageTypes = {
    physical: {
        id: 'physical',
        label: 'DAGGERHEART.CONFIG.DamageType.physical.name',
        abbreviation: 'DAGGERHEART.CONFIG.DamageType.physical.abbreviation',
        icon: 'fa-hand-fist'
    },
    magical: {
        id: 'magical',
        label: 'DAGGERHEART.CONFIG.DamageType.magical.name',
        abbreviation: 'DAGGERHEART.CONFIG.DamageType.magical.abbreviation',
        icon: 'fa-wand-sparkles'
    }
};

export const healingTypes = {
    hitPoints: {
        id: 'hitPoints',
        label: 'DAGGERHEART.CONFIG.HealingType.hitPoints.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.hitPoints.abbreviation'
    },
    stress: {
        id: 'stress',
        label: 'DAGGERHEART.CONFIG.HealingType.stress.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.stress.abbreviation'
    },
    hope: {
        id: 'hope',
        label: 'DAGGERHEART.CONFIG.HealingType.hope.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.hope.abbreviation'
    },
    armorStack: {
        id: 'armorStack',
        label: 'DAGGERHEART.CONFIG.HealingType.armorStack.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.armorStack.abbreviation'
    }
};

export const conditions = {
    vulnerable: {
        id: 'vulnerable',
        name: 'DAGGERHEART.CONFIG.Condition.vulnerable.name',
        icon: 'icons/magic/control/silhouette-fall-slip-prone.webp',
        description: 'DAGGERHEART.CONFIG.Condition.vulnerable.description'
    },
    hidden: {
        id: 'hidden',
        name: 'DAGGERHEART.CONFIG.Condition.hidden.name',
        icon: 'icons/magic/perception/silhouette-stealth-shadow.webp',
        description: 'DAGGERHEART.CONFIG.Condition.hidden.description'
    },
    restrained: {
        id: 'restrained',
        name: 'DAGGERHEART.CONFIG.Condition.restrained.name',
        icon: 'icons/magic/control/debuff-chains-shackle-movement-red.webp',
        description: 'DAGGERHEART.CONFIG.Condition.restrained.description'
    }
};

export const defaultRestOptions = {
    shortRest: () => ({
        tendToWounds: {
            id: 'tendToWounds',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.tendToWounds.name'),
            img: 'icons/magic/life/cross-worn-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.tendToWounds.description'),
            actions: [
                {
                    type: 'healing',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.tendToWounds.name'),
                    img: 'icons/magic/life/cross-worn-green.webp',
                    actionType: 'action',
                    healing: {
                        type: 'health',
                        value: {
                            custom: {
                                enabled: true,
                                formula: '1d4 + 1' // should be 1d4 + {tier}. How to use the roll param?
                            }
                        }
                    }
                }
            ]
        },
        clearStress: {
            id: 'clearStress',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.clearStress.name'),
            img: 'icons/magic/perception/eye-ringed-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.clearStress.description'),
            actions: [
                {
                    type: 'healing',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.clearStress.name'),
                    img: 'icons/magic/perception/eye-ringed-green.webp',
                    actionType: 'action',
                    healing: {
                        type: 'stress',
                        value: {
                            custom: {
                                enabled: true,
                                formula: '1d4 + 1' // should be 1d4 + {tier}. How to use the roll param?
                            }
                        }
                    }
                }
            ]
        },
        repairArmor: {
            id: 'repairArmor',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.repairArmor.name'),
            img: 'icons/skills/trades/smithing-anvil-silver-red.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.repairArmor.description'),
            actions: []
        },
        prepare: {
            id: 'prepare',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.prepare.name'),
            img: 'icons/skills/trades/academics-merchant-scribe.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.prepare.description'),
            actions: []
        }
    }),
    longRest: () => ({
        tendToWounds: {
            id: 'tendToWounds',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.tendToWounds.name'),
            img: 'icons/magic/life/cross-worn-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.tendToWounds.description'),
            actions: []
        },
        clearStress: {
            id: 'clearStress',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.clearStress.name'),
            img: 'icons/magic/perception/eye-ringed-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.clearStress.description'),
            actions: []
        },
        repairArmor: {
            id: 'repairArmor',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.repairArmor.name'),
            img: 'icons/skills/trades/smithing-anvil-silver-red.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.repairArmor.description'),
            actions: []
        },
        prepare: {
            id: 'prepare',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.prepare.name'),
            img: 'icons/skills/trades/academics-merchant-scribe.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.prepare.description'),
            actions: []
        },
        workOnAProject: {
            id: 'workOnAProject',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.workOnAProject.name'),
            img: 'icons/skills/social/thumbsup-approval-like.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.workOnAProject.description'),
            actions: []
        }
    }),
    custom: {
        id: 'customActivity',
        name: '',
        img: 'icons/skills/trades/academics-investigation-puzzles.webp',
        description: '',
        namePlaceholder: 'DAGGERHEART.APPLICATIONS.Downtime.custom.namePlaceholder',
        placeholder: 'DAGGERHEART.APPLICATIONS.Downtime.custom.placeholder'
    }
};

export const deathMoves = {
    avoidDeath: {
        id: 'avoidDeath',
        name: 'DAGGERHEART.CONFIG.DeathMoves.avoidDeath.name',
        img: 'icons/magic/time/hourglass-yellow-green.webp',
        description: 'DAGGERHEART.CONFIG.DeathMoves.avoidDeath.description'
    },
    riskItAll: {
        id: 'riskItAll',
        name: 'DAGGERHEART.CONFIG.DeathMoves.riskItAll.name',
        img: 'icons/sundries/gaming/dice-pair-white-green.webp',
        description: 'DAGGERHEART.CONFIG.DeathMoves.riskItAll.description'
    },
    blazeOfGlory: {
        id: 'blazeOfGlory',
        name: 'DAGGERHEART.CONFIG.DeathMoves.blazeOfGlory.name',
        img: 'icons/magic/life/heart-cross-strong-flame-purple-orange.webp',
        description: 'DAGGERHEART.CONFIG.DeathMoves.blazeOfGlory.description'
    }
};

export const tiers = {
    tier1: {
        id: 'tier1',
        label: 'DAGGERHEART.GENERAL.Tiers.tier1',
        value: 1
    },
    tier2: {
        id: 'tier2',
        label: 'DAGGERHEART.GENERAL.Tiers.tier2',
        value: 2
    },
    tier3: {
        id: 'tier3',
        label: 'DAGGERHEART.GENERAL.Tiers.tier3',
        value: 3
    },
    tier4: {
        id: 'tier4',
        label: 'DAGGERHEART.GENERAL.Tiers.tier4',
        value: 4
    }
};

export const diceTypes = {
    d4: 'd4',
    d6: 'd6',
    d8: 'd8',
    d10: 'd10',
    d12: 'd12',
    d20: 'd20'
};

export const multiplierTypes = {
    prof: 'Proficiency',
    cast: 'Spellcast',
    scale: 'Cost Scaling',
    result: 'Roll Result',
    flat: 'Flat'
};

export const diceSetNumbers = {
    prof: 'Proficiency',
    cast: 'Spellcast',
    scale: 'Cost Scaling',
    flat: 'Flat'
};

export const getDiceSoNicePresets = () => {
    const { diceSoNice } = game.settings.get(CONFIG.DH.id, CONFIG.DH.SETTINGS.gameSettings.appearance);

    return {
        hope: {
            ...diceSoNice.hope,
            colorset: 'inspired',
            texture: 'bloodmoon',
            material: 'metal',
            font: 'Arial Black',
            system: 'standard'
        },
        fear: {
            ...diceSoNice.fear,
            colorset: 'bloodmoon',
            texture: 'bloodmoon',
            material: 'metal',
            font: 'Arial Black',
            system: 'standard'
        },
        advantage: {
            ...diceSoNice.advantage,
            colorset: 'bloodmoon',
            texture: 'bloodmoon',
            material: 'metal',
            font: 'Arial Black',
            system: 'standard'
        },
        disadvantage: {
            ...diceSoNice.disadvantage,
            colorset: 'bloodmoon',
            texture: 'bloodmoon',
            material: 'metal',
            font: 'Arial Black',
            system: 'standard'
        }
    };
};

export const refreshTypes = {
    session: {
        id: 'session',
        label: 'DAGGERHEART.GENERAL.RefreshType.session'
    },
    shortRest: {
        id: 'shortRest',
        label: 'DAGGERHEART.GENERAL.RefreshType.shortrest'
    },
    longRest: {
        id: 'longRest',
        label: 'DAGGERHEART.GENERAL.RefreshType.longrest'
    }
};

export const abilityCosts = {
    hp: {
        id: 'hp',
        label: 'DAGGERHEART.CONFIG.HealingType.hitPoints.name',
        group: 'Global'
    },
    stress: {
        id: 'stress',
        label: 'DAGGERHEART.CONFIG.HealingType.stress.name',
        group: 'Global'
    },
    hope: {
        id: 'hope',
        label: 'Hope',
        group: 'TYPES.Actor.character'
    },
    armor: {
        id: 'armor',
        label: 'Armor Stack',
        group: 'TYPES.Actor.character'
    },
    fear: {
        id: 'fear',
        label: 'Fear',
        group: 'TYPES.Actor.adversary'
    }
};

export const countdownTypes = {
    spotlight: {
        id: 'spotlight',
        label: 'DAGGERHEART.CONFIG.CountdownTypes.Spotlight'
    },
    characterAttack: {
        id: 'characterAttack',
        label: 'DAGGERHEART.CONFIG.CountdownTypes.CharacterAttack'
    },
    custom: {
        id: 'custom',
        label: 'DAGGERHEART.CONFIG.CountdownTypes.Custom'
    }
};
export const rollTypes = {
    weapon: {
        id: 'weapon',
        label: 'DAGGERHEART.CONFIG.RollTypes.weapon.name'
    },
    spellcast: {
        id: 'spellcast',
        label: 'DAGGERHEART.CONFIG.RollTypes.spellcast.name'
    },
    ability: {
        id: 'ability',
        label: 'DAGGERHEART.CONFIG.RollTypes.ability.name'
    },
    diceSet: {
        id: 'diceSet',
        label: 'DAGGERHEART.CONFIG.RollTypes.diceSet.name'
    }
};

export const fearDisplay = {
    token: { value: 'token', label: 'DAGGERHEART.SETTINGS.Appearance.fearDisplay.token' },
    bar: { value: 'bar', label: 'DAGGERHEART.SETTINGS.Appearance.fearDisplay.bar' },
    hide: { value: 'hide', label: 'DAGGERHEART.SETTINGS.Appearance.fearDisplay.hide' }
};
