
function convert_combo(act, scene, line, play) {
    let result = 0; 
    switch(play) {
        case "Amphitryon": result = amphNum(act, scene, line); break;
        case 'Asinaria': result = asNum(act,scene,line); break;
        case 'Aulularia': result = aulNum(act,scene,line); break;
        case 'Bacchides': result = baccNum(act,scene,line); break;
        case "Captivi": result = captNum(act,scene,line); break;
        case 'Casina': result = casNum(act,scene,line); break;
        case 'Cistellaria': result = cistNum(act,scene,line); break;
        case 'Curculio': result = curcNum(act,scene,line); break;
        case "Epidicus": result = epidNum(act,scene,line); break;
        case 'Menaechmi': result = menNum(act,scene,line); break;
        case 'Mercator': result = mercNum(act,scene,line); break;
        case 'Miles Gloriosus': result = milNum(act,scene,line); break;
        case "Mostellaria": result = mostNum(act,scene,line); break;
        case 'Persa': result = persNum(act,scene,line); break;
        case 'Poenulus': result = poenNum(act,scene,line); break;
        case 'Pseudolus': result = psNum(act,scene,line); break;
        case "Rudens": result = rudNum(act,scene,line); break;
        case 'Stichus': result = stichNum(act,scene,line); break;
        case 'Trinummus': result = trinNum(act,scene,line); break;
        case 'Truculentus': result = trucNum(act,scene,line); break;
        default:
            return `sorry, we don't have a play with that name ${play}`;
    }
    if (result === 0){
        return "Combo does not exist";
    } else {
        return result;
    }
}

function amphNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      switch(scene) {
        case 1: lineNum = line + 152; break;
        case 2: lineNum = line + 462; break;
        case 3: lineNum = line + 498; break;
      }
    } else if (act === 2) {
        switch(scene) {
            case 1: lineNum = line + 550; break;
            case 2: lineNum = line + 632; break;
        }   
    } else if (act === 3) {
        switch(scene) {
            case 1: lineNum = line + 860; break;
            case 2: lineNum = line + 881; break;
            case 3: lineNum = line + 955; break;
            case 4: lineNum = line + 983; break;
        }
    } else if (act === 4) {
        switch(scene) {
            case 1: lineNum = line + 1008; break;
            case 2: lineNum = line + 1020; break;
            case 3: lineNum = line + 1034; break;
        }
    } else if (act === 5) {
        switch(scene) {
            case 1: lineNum = line + 1052; break;
            case 2: lineNum = line + 1130; break;
            case 3: lineNum = line + 1143; break;
        }
    }
    return lineNum;
  }

  function asNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 15;
      } else if (scene === 2) {
        lineNum = line + 126;
      } else if (scene === 3) {
        lineNum = line + 152;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 248;
      } else if (scene === 2) {
        lineNum = line + 256;
      } else if (scene === 3) {
        lineNum = line + 380;
      } else if (scene === 4) {
        lineNum = line + 406;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 503;
      } else if (scene === 2) {
        lineNum = line + 544;
      } else if (scene === 3) {
        lineNum = line + 590;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 745;
      } else if (scene === 2) {
        lineNum = line + 809;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 827;
      } else if (scene === 2) {
        lineNum = line + 850;
      }
    }
    return lineNum;
  }
  
  function aulNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 39;
      } else if (scene === 2) {
        lineNum = line + 78;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 119;
      } else if (scene === 2) {
        lineNum = line + 177;
      } else if (scene === 3) {
        lineNum = line + 267;
      } else if (scene === 4) {
        lineNum = line + 279;
      } else if (scene === 5) {
        lineNum = line + 326;
      } else if (scene === 6) {
        lineNum = line + 349;
      } else if (scene === 7) {
        lineNum = line + 362;
      } else if (scene === 8) {
        lineNum = line + 370;
      } else if (scene === 9) {
        lineNum = line + 397;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 405;
      } else if (scene === 2) {
        lineNum = line + 414;
      } else if (scene === 3) {
        lineNum = line + 448;
      } else if (scene === 4) {
        lineNum = line + 459;
      } else if (scene === 5) {
        lineNum = line + 474;
      } else if (scene === 6) {
        lineNum = line + 536;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 586;
      } else if (scene === 2) {
        lineNum = line + 607;
      } else if (scene === 3) {
        lineNum = line + 623;
      } else if (scene === 4) {
        lineNum = line + 627;
      } else if (scene === 5) {
        lineNum = line + 660;
      } else if (scene === 6) {
        lineNum = line + 666;
      } else if (scene === 7) {
        lineNum = line + 681;
      } else if (scene === 8) {
        lineNum = line + 700;
      } else if (scene === 9) {
        lineNum = line + 712;
      } else if (scene === 10) {
        lineNum = line + 730;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 807;
      } else {
        console.log(`error! there is no scene ${scene} in act 5 of Aulularia`);
      }
    }
    return lineNum;
  }
  
  function baccNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 34;
      } else if (scene === 2) {
        lineNum = line + 108;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 169;
      } else if (scene === 2) {
        lineNum = line + 178;
      } else if (scene === 3) {
        lineNum = line + 234;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 367;
      } else if (scene === 2) {
        lineNum = line + 384;
      } else if (scene === 3) {
        lineNum = line + 404;
      } else if (scene === 4) {
        lineNum = line + 499;
      } else if (scene === 5) {
        lineNum = line + 525;
      } else if (scene === 6) {
        lineNum = line + 529;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 572;
      } else if (scene === 2) {
        lineNum = line + 582;
      } else if (scene === 3) {
        lineNum = line + 611;
      } else if (scene === 4) {
        lineNum = line + 639;
      } else if (scene === 5) {
        lineNum = line + 760;
      } else if (scene === 6) {
        lineNum = line + 769;
      } else if (scene === 7) {
        lineNum = line + 798;
      } else if (scene === 8) {
        lineNum = line + 841;
      } else if (scene === 9) {
        lineNum = line + 924;
      } else if (scene === 10) {
        lineNum = line + 978;
      } else if (scene === 11) {
        lineNum = line + 1075;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 1086;
      } else if (scene === 2) {
        lineNum = line + 1119;
      }
    }
    return lineNum;
  }
  
  function captNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 68;
      } else if (scene === 2) {
        lineNum = line + 109;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 194;
      } else if (scene === 2) {
        lineNum = line + 250;
      } else if (scene === 3) {
        lineNum = line + 360;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 460;
      } else if (scene === 2) {
        lineNum = line + 497;
      } else if (scene === 3) {
        lineNum = line + 515;
      } else if (scene === 4) {
        lineNum = line + 532;
      } else if (scene === 5) {
        lineNum = line + 658;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 767;
      } else if (scene === 2) {
        lineNum = line + 780;
      } else if (scene === 3) {
        lineNum = line + 900;
      } else if (scene === 4) {
        lineNum = line + 908;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 921;
      } else if (scene === 2) {
        lineNum = line + 953;
      } else if (scene === 3) {
        lineNum = line + 977;
      } else if (scene === 4) {
        lineNum = line + 997;
      }
    }
    return lineNum;
  }
  
  function casNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 88;
      } else {
        console.log(`error! there is no scene ${scene} in act 1 of Casina`);
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 143;
      } else if (scene === 2) {
        lineNum = line + 164;
      } else if (scene === 3) {
        lineNum = line + 216;
      } else if (scene === 4) {
        lineNum = line + 278;
      } else if (scene === 5) {
        lineNum = line + 308;
      } else if (scene === 6) {
        lineNum = line + 352;
      } else if (scene === 7) {
        lineNum = line + 423;
      } else if (scene === 8) {
        lineNum = line + 436;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 514;
      } else if (scene === 2) {
        lineNum = line + 530;
      } else if (scene === 3) {
        lineNum = line + 562;
      } else if (scene === 4) {
        lineNum = line + 590;
      } else if (scene === 5) {
        lineNum = line + 620;
      } else if (scene === 6) {
        lineNum = line + 719;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 758;
      } else if (scene === 2) {
        lineNum = line + 779;
      } else if (scene === 3) {
        lineNum = line + 797;
      } else if (scene === 4) {
        lineNum = line + 813;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 854;
      } else if (scene === 2) {
        lineNum = line + 874;
      } else if (scene === 3) {
        lineNum = line + 936;
      } else if (scene === 4) {
        lineNum = line + 962;
      }
    }
    return lineNum;
  }
  
  function cistNum(act, scene, line) {
    let lineNum = 0;
    if (line === "") {
      return lineNum;
    }
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else if (scene === 2) {
        lineNum = line + 119;
      } else if (scene === 3) {
        lineNum = 148;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 202;
      } else if (scene === 2) {
        lineNum = line + 535;
      } else if (scene === 3) {
        lineNum = line + 542;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 630;
      } else {
        console.log(`error! there is no scene ${scene} in act 3 of Cistellaria`);
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 652;
      } else if (scene === 2) {
        lineNum = line + 670;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 773;
      } else {
        console.log(`error! there is no scene ${scene} in act 5 of Cistellaria`);
      }
    }
    return lineNum;
  }
  
  function curcNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else if (scene === 2) {
        lineNum = line + 95;
      } else if (scene === 3) {
        lineNum = line + 157;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 215;
      } else if (scene === 2) {
        lineNum = line + 250;
      } else if (scene === 3) {
        lineNum = line + 279;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 370;
      } else {
        console.log(`error! there is no scene ${scene} in act 3 of Curculio`);
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 461;
      } else if (scene === 2) {
        lineNum = line + 486;
      } else if (scene === 3) {
        lineNum = line + 532;
      } else if (scene === 4) {
        lineNum = line + 556;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 590;
      } else if (scene === 2) {
        lineNum = line + 598;
      } else if (scene === 3) {
        lineNum = line + 678;
      }
    }
    return lineNum;
  }
  
  function epidNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else if (scene === 2) {
        lineNum = line + 103;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 165;
      } else if (scene === 2) {
        lineNum = line + 180;
      } else if (scene === 3) {
        lineNum = line + 305;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 319;
      } else if (scene === 2) {
        lineNum = line + 336;
      } else if (scene === 3) {
        lineNum = line + 381;
      } else if (scene === 4) {
        lineNum = line + 436;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 525;
      } else if (scene === 2) {
        lineNum = line + 569;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 606;
      } else if (scene === 2) {
        lineNum = line + 665;
      }
    }
    return lineNum;
  }
  
  function menNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 76;
      } else if (scene === 2) {
        lineNum = line + 109;
      } else if (scene === 3) {
        lineNum = line + 181;
      } else if (scene === 4) {
        lineNum = line + 218;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 225;
      } else if (scene === 2) {
        lineNum = line + 272;
      } else if (scene === 3) {
        lineNum = line + 350;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 445;
      } else if (scene === 2) {
        lineNum = line + 465;
      } else if (scene === 3) {
        lineNum = line + 523;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 558;
      } else if (scene === 2) {
        lineNum = line + 570;
      } else if (scene === 3) {
        lineNum = line + 674;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 700;
      } else if (scene === 2) {
        lineNum = line + 752;
      } else if (scene === 3) {
        lineNum = line + 875;
      } else if (scene === 4) {
        lineNum = line + 888;
      } else if (scene === 5) {
        lineNum = line + 898;
      } else if (scene === 6) {
        lineNum = line + 965;
      } else if (scene === 7) {
        lineNum = line + 989;
      } else if (scene === 8) {
        lineNum = line + 1049;
      } else if (scene === 9) {
        lineNum = line + 1059;
      }
    }
    return lineNum;
  }
  
  function mercNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else if (scene === 2) {
        lineNum = line + 110;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 224;
      } else if (scene === 2) {
        lineNum = line + 271;
      } else if (scene === 3) {
        lineNum = line + 334;
      } else if (scene === 4) {
        lineNum = line + 468;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 498;
      } else if (scene === 2) {
        lineNum = line + 543;
      } else if (scene === 3) {
        lineNum = line + 561;
      } else if (scene === 4) {
        lineNum = line + 587;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 666;
      } else if (scene === 2) {
        lineNum = line + 691;
      } else if (scene === 3) {
        lineNum = line + 699;
      } else if (scene === 4) {
        lineNum = line + 740;
      } else if (scene === 5) {
        lineNum = line + 802;
      } else if (scene === 6) {
        lineNum = line + 816;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 829;
      } else if (scene === 2) {
        lineNum = line + 841;
      } else if (scene === 3) {
        lineNum = line + 956;
      } else if (scene === 4) {
        lineNum = line + 961;
      }
    }
    return lineNum;
  }
  
  function milNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else {
        console.log(`error! there is no scene ${scene} in act 1 of Miles Gloriosus`);
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 78;
      } else if (scene === 2) {
        lineNum = line + 155;
      } else if (scene === 3) {
        lineNum = line + 271;
      } else if (scene === 4) {
        lineNum = line + 353;
      } else if (scene === 5) {
        lineNum = line + 410;
      } else if (scene === 6) {
        lineNum = line + 480;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 595;
      } else if (scene === 2) {
        lineNum = line + 812;
      } else if (scene === 3) {
        lineNum = line + 874;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 946;
      } else if (scene === 2) {
        lineNum = line + 990;
      } else if (scene === 3) {
        lineNum = line + 1093;
      } else if (scene === 4) {
        lineNum = line + 1136;
      } else if (scene === 5) {
        lineNum = line + 1199;
      } else if (scene === 6) {
        lineNum = line + 1215;
      } else if (scene === 7) {
        lineNum = line + 1283;
      } else if (scene === 8) {
        lineNum = line + 1310;
      } else if (scene === 9) {
        lineNum = line + 1377;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 1393;
      } else {
        console.log(`error! there is no scene ${scene} in act 5 of Miles Gloriosus`);
      }
    }
    return lineNum;
  }
  
  function mostNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else if (scene === 2) {
        lineNum = line + 83;
      } else if (scene === 3) {
        lineNum = line + 156;
      } else if (scene === 4) {
        lineNum = line + 312;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 347;
      } else if (scene === 2) {
        lineNum = line + 430;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 531;
      } else if (scene === 2) {
        lineNum = line + 689;
      } else if (scene === 3) {
        lineNum = line + 903;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 857;
      } else if (scene === 2) {
        lineNum = line + 884;
      } else if (scene === 3) {
        lineNum = line + 992;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 1040;
      } else if (scene === 2) {
        lineNum = line + 1121;
      }
    }
    return lineNum;
  }
  
  function persNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line;
      } else if (scene === 2) {
        lineNum = line + 52;
      } else if (scene === 3) {
        lineNum = line + 80;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 167;
      } else if (scene === 2) {
        lineNum = line + 182;
      } else if (scene === 3) {
        lineNum = line + 250;
      } else if (scene === 4) {
        lineNum = line + 271;
      } else if (scene === 5) {
        lineNum = line + 301;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 328;
      } else if (scene === 2) {
        lineNum = line + 399;
      } else if (scene === 3) {
        lineNum = line + 404;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 448;
      } else if (scene === 2) {
        lineNum = line + 461;
      } else if (scene === 3) {
        lineNum = line + 469;
      } else if (scene === 4) {
        lineNum = line + 558;
      } else if (scene === 5) {
        lineNum = line + 672;
      } else if (scene === 6) {
        lineNum = line + 682;
      } else if (scene === 7) {
        lineNum = line + 710;
      } else if (scene === 8) {
        lineNum = line + 730;
      } else if (scene === 9) {
        lineNum = line + 737;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 752;
      } else if (scene === 2) {
        lineNum = line + 776;
      }
    }
    return lineNum;
  }
  
  function poenNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
        if (scene === 1) {
            lineNum = line + 128;
        } else if (scene === 2) {
            lineNum = line + 209;
        } else if (scene === 3) {
            lineNum = line + 409;
        }
    } else if (act === 2) {
        if (scene === 1) {
            lineNum = line + 448;
        } else {
            console.log(`error! there is no scene ${scene} in act 2 of Poenulus`);
        }
    } else if (act === 3) {
        if (scene === 1) {
            lineNum = line + 503;
        } else if (scene === 2) {
            lineNum = line + 577;
        } else if (scene === 3) {
            lineNum = line + 614;
        } else if (scene === 4) {
            lineNum = line + 710;
        } else if (scene === 5) {
            lineNum = line + 745;
        } else if (scene === 6) {
            lineNum = line + 795;
        }
    } else if (act === 4) {
        if (scene === 1) {
            lineNum = line + 816;
        } else if (scene === 2) {
            lineNum = line + 822;
        }
    } else if (act === 5) {
        if (scene === 1) {
            lineNum = line + 929;
        } else if (scene === 2) {
            lineNum = line + 960;
        } else if (scene === 3) {
            lineNum = line + 1119;
        } else if (scene === 4) {
            lineNum = line + 1173;
        } else if (scene === 5) {
            lineNum = line + 1279;
        } else if (scene === 6) {
            lineNum = line + 1337;
        } else if (scene === 7) {
            lineNum = line + 1371;
        }
    }
    return lineNum;
}

function psNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
        if (scene === 1) {
            lineNum = line + 2;
        } else if (scene === 2) {
            lineNum = line + 131;
        } else if (scene === 3) {
            lineNum = line + 229;
        } else if (scene === 4) {
            lineNum = line + 393;
        } else if (scene === 5) {
            lineNum = line + 414;
        }
    } else if (act === 2) {
        if (scene === 1) {
            lineNum = line + 573;
        } else if (scene === 2) {
            lineNum = line + 593;
        } else if (scene === 3) {
            lineNum = line + 666;
        } else if (scene === 4) {
            lineNum = line + 693;
        }
    } else if (act === 3) {
        if (scene === 1) {
            lineNum = line + 766;
        } else if (scene === 2) {
            lineNum = line + 789;
        }
    } else if (act === 4) {
        if (scene === 1) {
            lineNum = line + 904;
        } else if (scene === 2) {
            lineNum = line + 955;
        } else if (scene === 3) {
            lineNum = line + 1016;
        } else if (scene === 4) {
            lineNum = line + 1037;
        } else if (scene === 5) {
            lineNum = line + 1051;
        } else if (scene === 6) {
            lineNum = line + 1062;
        } else if (scene === 7) {
            lineNum = line + 1102;
        } else if (scene === 8) {
            lineNum = line + 1237;
        }
    } else if (act === 5) {
        if (scene === 1) {
            lineNum = line + 1245;
        } else if (scene === 2) {
            lineNum = line + 1284;
        }
    }
    return lineNum;
}

function rudNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
        if (scene === 1) {
            lineNum = line + 82;
        } else if (scene === 2) {
            lineNum = line + 88;
        } else if (scene === 3) {
            lineNum = line + 184;
        } else if (scene === 4) {
            lineNum = line + 219;
        } else if (scene === 5) {
            lineNum = line + 258;
        }
    } else if (act === 2) {
        if (scene === 1) {
            lineNum = line + 289;
        } else if (scene === 2) {
            lineNum = line + 305;
        } else if (scene === 3) {
            lineNum = line + 330;
        } else if (scene === 4) {
            lineNum = line + 413;
        } else if (scene === 5) {
            lineNum = line + 457;
        } else if (scene === 6) {
            lineNum = line + 484;
        } else if (scene === 7) {
            lineNum = line + 558;
        }
    } else if (act === 3) {
        if (scene === 1) {
            lineNum = line + 592;
        } else if (scene === 2) {
            lineNum = line + 614;
        } else if (scene === 3) {
            lineNum = line + 663;
        } else if (scene === 4) {
            lineNum = line + 705;
        } else if (scene === 5) {
            lineNum = line + 779;
        } else if (scene === 6) {
            lineNum = line + 838;
        }
    } else if (act === 4) {
        if (scene === 1) {
            lineNum = line + 891;
        } else if (scene === 2) {
            lineNum = line + 905;
        } else if (scene === 3) {
            lineNum = line + 937;
        } else if (scene === 4) {
            lineNum = line + 1044;
        } else if (scene === 5) {
            lineNum = line + 1190;
        } else if (scene === 6) {
            lineNum = line + 1204;
        } else if (scene === 7) {
            lineNum = line + 1226;
        } else if (scene === 8) {
            lineNum = line + 1264;
        }
    } else if (act === 5) {
        if (scene === 1) {
            lineNum = line + 1280;
        } else if (scene === 2) {
            lineNum = line + 1287;
        } else if (scene === 3) {
            lineNum = line + 1356;
        }
    }
    return lineNum;
}

function stichNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
        if (scene === 1) {
            lineNum = line;
        } else if (scene === 2) {
            lineNum = line + 57;
        } else if (scene === 3) {
            lineNum = line + 154;
        }
    } else if (act === 2) {
        if (scene === 1) {
            lineNum = line + 273;
        } else if (scene === 2) {
            lineNum = line + 324;
        }
    } else if (act === 3) {
        if (scene === 1) {
            lineNum = line + 401;
        } else if (scene === 2) {
            lineNum = line + 453;
        }
    } else if (act === 4) {
        if (scene === 1) {
            lineNum = line + 504;
        } else if (scene === 2) {
            lineNum = line + 578;
        }
    } else if (act === 5) {
        if (scene === 1) {
            lineNum = line + 640;
        } else if (scene === 2) {
            lineNum = line + 648;
        } else if (scene === 3) {
            lineNum = line + 672;
        } else if (scene === 4) {
            lineNum = line + 682;
        } else if (scene === 5) {
            lineNum = line + 741;
        } else if (scene === 6) {
            lineNum = line + 761;
        } else if (scene === 7) {
            lineNum = line + 768;
        }
    }
    return lineNum;
}

function trinNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
        if (scene === 1) {
            lineNum = line + 22;
        } else if (scene === 2) {
            lineNum = line + 38;
        }
    } else if (act === 2) {
        if (scene === 1) {
            lineNum = line + 222;
        } else if (scene === 2) {
            lineNum = line + 275;
        } else if (scene === 3) {
            lineNum = line + 391;
        } else if (scene === 4) {
            lineNum = line + 401;
        }
    } else if (act === 3) {
        if (scene === 1) {
            lineNum = line + 601;
        } else if (scene === 2) {
            lineNum = line + 626;
        } else if (scene === 3) {
            lineNum = line + 728;
        }
    } else if (act === 4) {
        if (scene === 1) {
            lineNum = line + 819;
        } else if (scene === 2) {
            lineNum = line + 842;
        } else if (scene === 3) {
            lineNum = line + 1007;
        } else if (scene === 4) {
            lineNum = line + 1092;
        }
    } else if (act === 5) {
        if (scene === 1) {
            lineNum = line + 1114;
        } else if (scene === 2) {
            lineNum = line + 1124;
        }
    }
    return lineNum;
}

function trucNum(act, scene, line) {
    let lineNum = 0;
    if (act === 1) {
      if (scene === 1) {
        lineNum = line + 21;
      } else if (scene === 2) {
        lineNum = line + 94;
      }
    } else if (act === 2) {
      if (scene === 1) {
        lineNum = line + 208;
      } else if (scene === 2) {
        lineNum = line + 255;
      } else if (scene === 3) {
        lineNum = line + 321;
      } else if (scene === 4) {
        lineNum = line + 351;
      } else if (scene === 5) {
        lineNum = line + 447;
      } else if (scene === 6) {
        lineNum = line + 481;
      } else if (scene === 7) {
        lineNum = line + 550;
      } else if (scene === 8) {
        lineNum = line + 630;
      }
    } else if (act === 3) {
      if (scene === 1) {
        lineNum = line + 644;
      } else if (scene === 2) {
        lineNum = line + 668;
      }
    } else if (act === 4) {
      if (scene === 1) {
        lineNum = line + 698;
      } else if (scene === 2) {
        lineNum = line + 710;
      } else if (scene === 3) {
        lineNum = line + 774;
      } else if (scene === 4) {
        lineNum = line + 853;
      }
    } else if (act === 5) {
      if (scene === 1) {
        lineNum = line + 892;
      } else {
        console.log(`error! there is no scene ${scene} in act 5 of Truculentus`);
      }
    }
    return lineNum;
  }
    

module.exports = {
    convert_combo
}