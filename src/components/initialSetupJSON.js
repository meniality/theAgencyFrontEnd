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
      currentCount: 3000,
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
  }
}

export default initialSetup