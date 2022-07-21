function freeCell(inputNum, textValues) { 
  if (inputNum === 0) {
    if (textValues[0].textContent === textValues[4].textContent) {
      if (textValues[8].textContent === "") return 8;
    }else if (textValues[0].textContent === textValues[8].textContent) {
      if (textValues[4].textContent === "") {
        return 4
      }else if (textValues[1].textContent === "") {
        return 1
      }
    }
    else if (textValues[0].textContent === textValues[1].textContent) {
      if (textValues[2].textContent === "") {
        return 2
      }else if (textValues[6].textContent === "") {
        return 6
      }else if (textValues[8].textContent === "") {
        return 8
      }
    } else if (textValues[0].textContent === textValues[2].textContent) {
      if (textValues[1].textContent === "") {
        return 1
      }else if (textValues[3].textContent === "") {
        return 3
      }
    } else if (textValues[0].textContent === textValues[3].textContent) {
      if (textValues[6].textContent === "") {
        return 6
      }else if (textValues[1].textContent === "") {
        return 1
      }
    } else if (textValues[0].textContent === textValues[6].textContent) {
      if (textValues[3].textContent === "") return 3;
    } else if (textValues[4].textContent === "") {
      return 4;
    }else if (textValues[2].textContent === "") {
      return 2
    }else if (textValues[1].textContent === "") {
      return 1
    }else if (textValues[6].textContent === "") {
      return 6
    }
  } else if (inputNum === 1) {
    if (textValues[1].textContent === textValues[4].textContent) {
      if (textValues[7].textContent === "") return 7;
    } else if (textValues[1].textContent === textValues[0].textContent) {
      if (textValues[2].textContent === "") {
        return 2;
      }
    } else if (textValues[1].textContent === textValues[2].textContent) {
      if (textValues[0].textContent === "") {
        return 0;
      }
    } else if (textValues[4].textContent === "") {
      return 4;
    }else if (textValues[0].textContent === "") {
      return 0;
    }else if (textValues[2].textContent === "") {
      return 2;
    }
  } else if (inputNum === 2) {
    if (textValues[2].textContent === textValues[4].textContent) {
      if (textValues[6].textContent === "") {
        return 6;
      }
    }else if (textValues[2].textContent === textValues[6].textContent) {
      if (textValues[4].textContent === "") {
        return 4;
      }else if (textValues[1].textContent === "") {
        return 1
      }else if (textValues[5].textContent === "") {
        return 5
      }
    } else if (textValues[2].textContent === textValues[1].textContent) {
      if (textValues[0].textContent === "") {
        return 0;
      }else if (textValues[8].textContent === "") {
        return 8
      }else if (textValues[6].textContent === "") {
        return 6
      }
    } else if (textValues[2].textContent === textValues[0].textContent) {
      if (textValues[1].textContent === "") {
        return 1
      }else if (textValues[5].textContent === "") {
        return 5
      }else if (textValues[7].textContent === "") {
        return 7
      }
      
    } else if (textValues[2].textContent === textValues[5].textContent) {
      if (textValues[8].textContent === "") {
        return 8;
      }else if (textValues[1].textContent === "") {
        return 1;
      }
    } else if (textValues[2].textContent === textValues[8].textContent) {
      if (textValues[5].textContent === "") return 5;
    } else if (textValues[4].textContent === "") {
      return 4;
    }else if (textValues[8].textContent === "") {
      return 8
    }else if (textValues[0].textContent === "") {
      return 0
    }else if (textValues[6].textContent === "") {
      return 6
    }
  } else if (inputNum === 3) {
    if (textValues[3].textContent === textValues[4].textContent) {
      if (textValues[5].textContent === "") {
        return 5;
      } else if (textValues[1].textContent === "") {
        return 1;
      } else if (textValues[7].textContent === "") {
        return 7;
      }
    } else if (textValues[3].textContent === textValues[5].textContent) {
      if (textValues[4].textContent === "") {
        return 4;
      } else if (textValues[7].textContent === "") {
        return 7;
      }else if (textValues[6].textContent === "") {
        return 6;
      }else if (textValues[0].textContent === "") {
        return 0
      }else if (textValues[2].textContent === "") {
        return 2
      }
    } else if (textValues[3].textContent === textValues[0].textContent) {
      if (textValues[6].textContent === "") return 6;
    } else if (textValues[3].textContent === textValues[6].textContent) {
      if (textValues[0].textContent === "") {
        return 0;
      }
    } else if (textValues[4].textContent === "") {
      return 4;
    }else if (textValues[6].textContent === "") {
      return 6;
    }else if (textValues[0].textContent === "") {
      return 0;
    }
  } else if (inputNum === 4) {
    if (textValues[4].textContent === textValues[0].textContent) {
      if (textValues[8].textContent === "") return 8;
    } else if (textValues[4].textContent === textValues[8].textContent) {
      if (textValues[0].textContent === "") return 0;
    } else if (textValues[4].textContent === textValues[2].textContent) {
      if (textValues[6].textContent === "") return 6;
    } else if (textValues[4].textContent === textValues[6].textContent) {
      if (textValues[2].textContent === "") return 2;
    } else return 0;
  } else if (inputNum === 5) {
    if (textValues[5].textContent === textValues[2].textContent) {
      if (textValues[8].textContent === "") {
        return 8
      }else if (textValues[0].textContent === "") {
        return 0
      }else if (textValues[6].textContent === "") {
        return 6
      }
    } else if (textValues[5].textContent === textValues[8].textContent) {
      if (textValues[2].textContent === "") {
        return 2;
      }
    } else if (textValues[5].textContent === textValues[4].textContent) {
      if (textValues[3].textContent === "") return 3;
    } else if (textValues[5].textContent === textValues[3].textContent) {
      if (textValues[4].textContent === "") {
        return 4
      }else if (textValues[8].textContent === "") {
        return 8;
      }
    } else if (textValues[4].textContent === "") {
      return 4;
    }else if (textValues[8].textContent === "") {
      return 8;
    }else if (textValues[6].textContent === "") {
      return 6;
    }else if (textValues[0].textContent === "") {
      return 0
    }
  } else if (inputNum === 6) {
    if (textValues[6].textContent === textValues[4].textContent) {
      if (textValues[2].textContent === "") {
        return 2;
      }
    } else if (textValues[6].textContent === textValues[2].textContent) {
      if (textValues[4].textContent === "") {
        return 4;
      }else if (textValues[3].textContent === "") {
        return 3;
      }else if (textValues[0].textContent === "") {
        return 0
      }else if (textValues[1].textContent === "") {
        return 1
      }
    } else if (textValues[6].textContent === textValues[7].textContent) {
      if (textValues[8].textContent === "") return 8;
    } else if (textValues[6].textContent === textValues[8].textContent) {
      if (textValues[7].textContent === "") {
        return 7
      }else if (textValues[0].textContent === "") {
        return 0
      }else if (textValues[3].textContent === "") {
        return 3
      }
    } else if (textValues[6].textContent === textValues[3].textContent) {
      if (textValues[0].textContent === "") {
        return 0;
      }else if (textValues[1].textContent === "") {
        return 1
      }
    } else if (textValues[6].textContent === textValues[0].textContent) {
      if (textValues[3].textContent === "") return 3;
    } else if (textValues[4].textContent === "") {
      return 4;
    }
  } else if (inputNum === 7) {
    if (textValues[7].textContent === textValues[6].textContent) {
      if (textValues[8].textContent === "") {
        return 8;
      }
    } else if (textValues[7].textContent === textValues[8].textContent) {
      if (textValues[6].textContent === "") {
        return 6;
      }else if (textValues[5].textContent === "") {
        return 5
      }else if (textValues[2].textContent === "") {
        return 2
      }
    } else if (textValues[7].textContent === textValues[4].textContent) {
      if (textValues[1].textContent === "") return 1;
    } else if (textValues[7].textContent === textValues[1].textContent) {
      if (textValues[4].textContent === "") {
        return 4
      }else if (textValues[6].textContent === "") {
        return 6
      }else if (textValues[3].textContent === "") {
        return 3
      }
    } else if (textValues[4].textContent === "") {
      return 4;
    }else if (textValues[3].textContent === "") {
        return 3;
      }else if (textValues[6].textContent === "") {
        return 6;
      }
  } else if (inputNum === 8) {
    if (textValues[8].textContent === textValues[4].textContent) {
      if (textValues[0].textContent === "") {
        return 0;
      }else if (textValues[5].textContent === "") {
        return 5
      }else if (textValues[6].textContent === "") {
        return 6
      }
    } else if (textValues[8].textContent === textValues[0].textContent) {
      if (textValues[4].textContent === "") {
        return 4;
      }
    } else if (textValues[8].textContent === textValues[7].textContent) {
      if (textValues[6].textContent === "") {
        return 6;
      }
    } else if (textValues[8].textContent === textValues[6].textContent) {
      if (textValues[7].textContent === "") return 7;
    } else if (textValues[8].textContent === textValues[5].textContent) {
      if (textValues[2].textContent === "") {
        return 2
      } else if (textValues[7].textContent === "") {
        return 7
      }else if (textValues[6].textContent === "") {
        return 6
      }
    } else if (textValues[8].textContent === textValues[2].textContent) {
      if (textValues[5].textContent === "") return 5;
    } else if (textValues[4].textContent === "") {
      return 4;
    }
  }
}

export default freeCell;
