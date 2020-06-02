export const initialSetup= {
  resources: {
    bitsOfInfo: {
      visible: true,
      unlocked: true,
      currentCount: 0, 
      title: "Bits Of Info:",
      perSecond: 0
    },
    money: {
      visible: true,
      unlocked: true,
      currentCount:0,
      title: "Money: $",
      perSecond: 0
    },
    algorithms: {
      currentCount: 0,
      currentEffeiency: 1,
      cost: 40
    },
    energy: {
      title: 'Energy:',
      visible: false,
      unlocked: false,
      currentCount: 0,
      max: 100,
      currentEffeiency: 1,
      unlockCost: {
        money: 1000
      },
      perSecond: 0
    }
  },
  tabs: {
    resources: true,
    blackMarket: true
  },
  actionVisibility:{
    resource: {
      money:{
        turnIn40Bits:{
          visible: true,
          minimized: false
        }
      },
      bitsOfInfo: {
        searchTheInternet:{
          visible: true,
          minimized: false
        },
        hireAHacker:{
          visible:false,
          minimized: false
        },
      },
      energy:{
        generateEnergy:{
          visible: true,
          minimized: false
        }
      }
    },
  },
  artifacts:[
    {name: 'Slot Machine',
      visible: false,
      purchased: false,
      searchCost: 1000,
      purchaseCost: 400,
      image: 'slotMachine',
      blurb: 'I came into possesion of this item many years ago and it has never worked as the seller described. Selling to just get it out of my hair.',
      insideKnowledge: "Through your research you've traced this item back to the 1950's. It seems back then it would slowly spit out quarters even though the machine was empty and unplugged. After it stopped working it dissapeard from records. Until now. You should buy it to just to take a look."
    },
  ]
}

export default initialSetup