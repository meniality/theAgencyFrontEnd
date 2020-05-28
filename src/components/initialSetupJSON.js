export const initialSetup= {
  resources: {
    bitsOfInfo: {
      visible: true,
        currentCount: 0, 
        title: "Bits Of Info:",
        perSecond: 0
    },
    money: {
      visible: true,
      currentCount: 0,
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
      cost: {
        bitsOfInfo: 400,
        energy: 100
      }
    }
  },
  tabs: {
    resources: true,
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
        }
      }
    },
  }
}

export default initialSetup