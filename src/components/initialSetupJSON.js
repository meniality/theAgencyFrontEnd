export const initialSetup= {
  resources: {
    bitsOfInfo: {
        currentCount: 180, 
        title: "Bits Of Info:",
        perSecond: 0
    },
    money: {
      currentCount: 400,
      title: "Bank Account: $",
      perSecond: 0
    },
    algorithms: {
      currentCount: 0,
      currentEffeiency: 1,
      cost: 40
    }
  },
  locations: {
    newsOutlets: {
      title: "News Outlets"
    }
  },
  tabs: {
    research: true,
    finance: false,
  },
  actionVisibility:{
    research: {
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
    finance: {
      newsOutlets:{
        turnIn40Bits:{
          visible: true,
          minimized: false
        }
      }
    }
  }
}

export default initialSetup