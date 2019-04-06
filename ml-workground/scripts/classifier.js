var AdaBoostClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var forest = new Array();

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 0.5) {
            classes[0] = 0.6635573546538804;
            classes[1] = 0.044862930463717546;
        } else {
            classes[0] = 0.24070768276623525;
            classes[1] = 0.050872032115592374;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 2.5) {
            classes[0] = 0.24786502714919684;
            classes[1] = 0.09890356989127574;
        } else {
            classes[0] = 0.5803420025414379;
            classes[1] = 0.07288940041798003;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[169] <= 0.5) {
            classes[0] = 0.24027301077681204;
            classes[1] = 0.1387842329011938;
        } else {
            classes[0] = 0.5103260314532759;
            classes[1] = 0.11061672486827649;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.5646408979395554;
            classes[1] = 0.19603968580633171;
        } else {
            classes[0] = 0.1192480249195991;
            classes[1] = 0.12007139133470547;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[169] <= 1.5) {
            classes[0] = 0.3369684310326913;
            classes[1] = 0.27064680806269714;
        } else {
            classes[0] = 0.29526050361772843;
            classes[1] = 0.0971242572870193;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.5105639043417646;
            classes[1] = 0.28260043539486374;
        } else {
            classes[0] = 0.0829680371310738;
            classes[1] = 0.12386762313197211;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 0.5) {
            classes[0] = 0.27216549636482873;
            classes[1] = 0.12757260288398992;
        } else {
            classes[0] = 0.2940392015164295;
            classes[1] = 0.3062226992348591;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[171] <= 0.5) {
            classes[0] = 0.35001310818774417;
            classes[1] = 0.37040545295738475;
        } else {
            classes[0] = 0.19636786126267736;
            classes[1] = 0.08321357759217618;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 0.5) {
            classes[0] = 0.1590065347580664;
            classes[1] = 0.2207708570504024;
        } else {
            classes[0] = 0.3732518457105667;
            classes[1] = 0.24697076248094257;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 0.5) {
            classes[0] = 0.3729427389827311;
            classes[1] = 0.25731935312343723;
        } else {
            classes[0] = 0.14973699943155935;
            classes[1] = 0.2200009084622475;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[231] <= 0.5) {
            classes[0] = 0.3299361216192262;
            classes[1] = 0.38337876699693285;
        } else {
            classes[0] = 0.18604100028440596;
            classes[1] = 0.10064411109942553;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 0.5) {
            classes[0] = 0.2738071876704275;
            classes[1] = 0.18197319663759104;
        } else {
            classes[0] = 0.23723292676851568;
            classes[1] = 0.3069866889234556;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 0.5) {
            classes[0] = 0.23798224432331322;
            classes[1] = 0.30963648575748304;
        } else {
            classes[0] = 0.26972110992931536;
            classes[1] = 0.18266015998985438;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.41090414689029614;
            classes[1] = 0.3403318104384912;
        } else {
            classes[0] = 0.09446311827579247;
            classes[1] = 0.15430092439540832;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[212] <= 2.5) {
            classes[0] = 0.4120962999550046;
            classes[1] = 0.45622722046730113;
        } else {
            classes[0] = 0.09176971907834207;
            classes[1] = 0.039906760499367096;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 0.5) {
            classes[0] = 0.05858275783537092;
            classes[1] = 0.11026924857339195;
        } else {
            classes[0] = 0.44387843154117196;
            classes[1] = 0.3872695620501814;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 1.5) {
            classes[0] = 0.37402018461713826;
            classes[1] = 0.3037089531990422;
        } else {
            classes[0] = 0.12785683103310472;
            classes[1] = 0.19441403115072625;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[90] <= 0.5) {
            classes[0] = 0.2774513435374351;
            classes[1] = 0.3415600957495747;
        } else {
            classes[0] = 0.22393400443666808;
            classes[1] = 0.15705455627628234;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 1.5) {
            classes[0] = 0.4491685329531281;
            classes[1] = 0.3976082349551108;
        } else {
            classes[0] = 0.051763774084067654;
            classes[1] = 0.10145945800773003;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[236] <= 1.5) {
            classes[0] = 0.3906288893381185;
            classes[1] = 0.43776486846220997;
        } else {
            classes[0] = 0.11018781145930971;
            classes[1] = 0.0614184307403622;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.42744387880377127;
            classes[1] = 0.3754392258377346;
        } else {
            classes[0] = 0.0730113773284195;
            classes[1] = 0.12410551803001195;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[368] <= 0.5) {
            classes[0] = 0.4167108201312239;
            classes[1] = 0.4557130175278552;
        } else {
            classes[0] = 0.08370942704879657;
            classes[1] = 0.043866735292095366;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 1.5) {
            classes[0] = 0.3333655279918135;
            classes[1] = 0.2737228972768997;
        } else {
            classes[0] = 0.16680905530448506;
            classes[1] = 0.22610251942676168;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[265] <= 0.5) {
            classes[0] = 0.32272487241232967;
            classes[1] = 0.37704088545114667;
        } else {
            classes[0] = 0.17742137493099686;
            classes[1] = 0.12281286720551998;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[200] <= 0.5) {
            classes[0] = 0.3627549526486755;
            classes[1] = 0.4097949531329251;
        } else {
            classes[0] = 0.13730260756325327;
            classes[1] = 0.09014748665515734;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 3.5) {
            classes[0] = 0.43088642987008036;
            classes[1] = 0.3875934945748248;
        } else {
            classes[0] = 0.06909717593615516;
            classes[1] = 0.1124228996189331;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[257] <= 0.5) {
            classes[0] = 0.4238519018079959;
            classes[1] = 0.4592204018848136;
        } else {
            classes[0] = 0.07620914492155102;
            classes[1] = 0.040718551385647554;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 1.5) {
            classes[0] = 0.48389591315215746;
            classes[1] = 0.45949572405799877;
        } else {
            classes[0] = 0.01604554840774195;
            classes[1] = 0.040562814382120824;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[197] <= 0.5) {
            classes[0] = 0.41540049625421216;
            classes[1] = 0.4514697131110264;
        } else {
            classes[0] = 0.08471217745739422;
            classes[1] = 0.04841761317734002;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[282] <= 0.5) {
            classes[0] = 0.4231115066709893;
            classes[1] = 0.4558638714809323;
        } else {
            classes[0] = 0.07688534877223423;
            classes[1] = 0.04413927307587193;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 0.5) {
            classes[0] = 0.22107210396093702;
            classes[1] = 0.17193423936019314;
        } else {
            classes[0] = 0.2788523693624297;
            classes[1] = 0.32814128731643244;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[89] <= 0.5) {
            classes[0] = 0.15036769580564588;
            classes[1] = 0.19862202647093874;
        } else {
            classes[0] = 0.3495659084485237;
            classes[1] = 0.3014443692748948;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.4074518194002139;
            classes[1] = 0.36596035210979433;
        } else {
            classes[0] = 0.09252153787908468;
            classes[1] = 0.13406629061090178;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[340] <= 0.5) {
            classes[0] = 0.3982771028857979;
            classes[1] = 0.4337940262810198;
        } else {
            classes[0] = 0.10174311065350007;
            classes[1] = 0.0661857601796901;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.35652861094327526;
            classes[1] = 0.3106135913647838;
        } else {
            classes[0] = 0.14343870183974347;
            classes[1] = 0.1894190958521803;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[168] <= 1.5) {
            classes[0] = 0.4022902469418475;
            classes[1] = 0.4368591890729277;
        } else {
            classes[0] = 0.09770676974137489;
            classes[1] = 0.06314379424384985;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.42344045063272523;
            classes[1] = 0.38540454826421183;
        } else {
            classes[0] = 0.07651031850351776;
            classes[1] = 0.1146446825995354;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[337] <= 0.5) {
            classes[0] = 0.46503215569390927;
            classes[1] = 0.48501889344613924;
        } else {
            classes[0] = 0.03497711204461975;
            classes[1] = 0.014971838815313868;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 3.5) {
            classes[0] = 0.45341738389032527;
            classes[1] = 0.42332575399752376;
        } else {
            classes[0] = 0.04648376313968217;
            classes[1] = 0.07677309897246705;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[213] <= 0.5) {
            classes[0] = 0.2995028294290279;
            classes[1] = 0.3448172859601136;
        } else {
            classes[0] = 0.20048327515826236;
            classes[1] = 0.15519660945259595;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 0.5) {
            classes[0] = 0.34699184061460764;
            classes[1] = 0.3039598669974111;
        } else {
            classes[0] = 0.15298301489866448;
            classes[1] = 0.19606527748931424;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 1.5) {
            classes[0] = 0.36713050579751483;
            classes[1] = 0.40518364705303916;
        } else {
            classes[0] = 0.1328659757338646;
            classes[1] = 0.09481987141558747;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 0.5) {
            classes[0] = 0.3102128772087099;
            classes[1] = 0.26605340104775926;
        } else {
            classes[0] = 0.18975522341769674;
            classes[1] = 0.23397849832583625;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[63] <= 1.5) {
            classes[0] = 0.2243416958484495;
            classes[1] = 0.2671075091610173;
        } else {
            classes[0] = 0.2756426224064432;
            classes[1] = 0.2329081725840905;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[101] <= 0.5) {
            classes[0] = 0.35006772868612146;
            classes[1] = 0.3102932962006119;
        } else {
            classes[0] = 0.1499219371679939;
            classes[1] = 0.189717037945269;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 1.5) {
            classes[0] = 0.28378193451402633;
            classes[1] = 0.3242261951299178;
        } else {
            classes[0] = 0.2162229213163098;
            classes[1] = 0.17576894903975193;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 2.5) {
            classes[0] = 0.3889648038980025;
            classes[1] = 0.35145715286131474;
        } else {
            classes[0] = 0.1110310285599146;
            classes[1] = 0.1485470146807683;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[200] <= 0.5) {
            classes[0] = 0.3704390967573682;
            classes[1] = 0.40454790501913696;
        } else {
            classes[0] = 0.12957874874744466;
            classes[1] = 0.09543424947605339;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[255] <= 0.5) {
            classes[0] = 0.4958711827369945;
            classes[1] = 0.48500943231801186;
        } else {
            classes[0] = 0.004119556412980858;
            classes[1] = 0.014999828532014158;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[10] <= 0.5) {
            classes[0] = 0.4506228922527687;
            classes[1] = 0.4713971624837031;
        } else {
            classes[0] = 0.04950095427371974;
            classes[1] = 0.0284789909898058;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.35327522621486995;
            classes[1] = 0.31679053025601944;
        } else {
            classes[0] = 0.14676439412090272;
            classes[1] = 0.18316984940821776;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[131] <= 0.5) {
            classes[0] = 0.3461379812129589;
            classes[1] = 0.38221938964094404;
        } else {
            classes[0] = 0.15389986722206367;
            classes[1] = 0.11774276192403056;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 1.5) {
            classes[0] = 0.4440676828815356;
            classes[1] = 0.41738617837560965;
        } else {
            classes[0] = 0.05594221150213956;
            classes[1] = 0.08260392724070956;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[431] <= 0.5) {
            classes[0] = 0.4723702428808224;
            classes[1] = 0.48757849739905507;
        } else {
            classes[0] = 0.027665992226883204;
            classes[1] = 0.012385267493242463;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[316] <= 0.5) {
            classes[0] = 0.4979564137218058;
            classes[1] = 0.4894281880723775;
        } else {
            classes[0] = 0.0019966540811439475;
            classes[1] = 0.01061874412467633;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.4203811361400701;
            classes[1] = 0.3904092522412138;
        } else {
            classes[0] = 0.0797545433881147;
            classes[1] = 0.1094550682306076;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[236] <= 0.5) {
            classes[0] = 0.30247684836110095;
            classes[1] = 0.33959499532353976;
        } else {
            classes[0] = 0.1976391648800705;
            classes[1] = 0.1602889914352863;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[156] <= 0.5) {
            classes[0] = 0.4112130308864443;
            classes[1] = 0.3801423111649868;
        } else {
            classes[0] = 0.08885981252631787;
            classes[1] = 0.11978484542223539;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[212] <= 6.5) {
            classes[0] = 0.4780012964585083;
            classes[1] = 0.49122007120726663;
        } else {
            classes[0] = 0.02206884280221282;
            classes[1] = 0.008709789532021044;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 5.5) {
            classes[0] = 0.4795752064576217;
            classes[1] = 0.46156762210590624;
        } else {
            classes[0] = 0.020389699524605325;
            classes[1] = 0.038467471911860486;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[280] <= 0.5) {
            classes[0] = 0.4007416421832904;
            classes[1] = 0.42886547163968636;
        } else {
            classes[0] = 0.09928732046163688;
            classes[1] = 0.07110556571538548;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.4254373881749696;
            classes[1] = 0.39633868156639923;
        } else {
            classes[0] = 0.07456054304037665;
            classes[1] = 0.10366338721824661;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 0.5) {
            classes[0] = 0.07025399628571928;
            classes[1] = 0.09768603914610088;
        } else {
            classes[0] = 0.42976694742636246;
            classes[1] = 0.40229301714181487;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 0.5) {
            classes[0] = 0.2500910923457448;
            classes[1] = 0.21318200291706385;
        } else {
            classes[0] = 0.24994484105973017;
            classes[1] = 0.2867820636774639;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[419] <= 0.5) {
            classes[0] = 0.45848433397075955;
            classes[1] = 0.4766413033553654;
        } else {
            classes[0] = 0.041539033133477885;
            classes[1] = 0.0233353295403965;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[116] <= 0.5) {
            classes[0] = 0.4718384974989852;
            classes[1] = 0.4537272224124748;
        } else {
            classes[0] = 0.02813334229775612;
            classes[1] = 0.04630093779077618;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[291] <= 0.5) {
            classes[0] = 0.3434468018239762;
            classes[1] = 0.3752926439858508;
        } else {
            classes[0] = 0.15656664422956504;
            classes[1] = 0.12469390996060951;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 0.5) {
            classes[0] = 0.3066278587226726;
            classes[1] = 0.27164623163862406;
        } else {
            classes[0] = 0.19337114701846275;
            classes[1] = 0.22835476262024162;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 2.5) {
            classes[0] = 0.42358485897361137;
            classes[1] = 0.44689651153408055;
        } else {
            classes[0] = 0.07641782230142366;
            classes[1] = 0.05310080719089374;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[47] <= 0.5) {
            classes[0] = 0.23373215426205382;
            classes[1] = 0.1994904148893626;
        } else {
            classes[0] = 0.26624728415516574;
            classes[1] = 0.3005301466934165;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[192] <= 0.5) {
            classes[0] = 0.3457319733657274;
            classes[1] = 0.3759975498927337;
        } else {
            classes[0] = 0.15425096517407433;
            classes[1] = 0.12401951156746058;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.3517506619863957;
            classes[1] = 0.32029688194334743;
        } else {
            classes[0] = 0.14822826763073982;
            classes[1] = 0.17972418843951346;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[197] <= 0.5) {
            classes[0] = 0.4242777877914229;
            classes[1] = 0.4464096219969977;
        } else {
            classes[0] = 0.07571408961580259;
            classes[1] = 0.05359850059577569;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[80] <= 0.5) {
            classes[0] = 0.4086509205163386;
            classes[1] = 0.3819520311797074;
        } else {
            classes[0] = 0.09132421717976431;
            classes[1] = 0.11807283112419333;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[237] <= 0.5) {
            classes[0] = 0.34607473334347144;
            classes[1] = 0.37612487786149884;
        } else {
            classes[0] = 0.1539200592106822;
            classes[1] = 0.12388032958435585;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[101] <= 0.5) {
            classes[0] = 0.3477621344546509;
            classes[1] = 0.31655141475007126;
        } else {
            classes[0] = 0.1522252345339479;
            classes[1] = 0.18346121626133174;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[90] <= 0.5) {
            classes[0] = 0.29741549516392946;
            classes[1] = 0.32916689218245127;
        } else {
            classes[0] = 0.20258169421925534;
            classes[1] = 0.17083591843436757;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[174] <= 0.5) {
            classes[0] = 0.4743262365390851;
            classes[1] = 0.4581033356637648;
        } else {
            classes[0] = 0.025667363862147335;
            classes[1] = 0.04190306393500629;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[134] <= 4.5) {
            classes[0] = 0.4844609302544888;
            classes[1] = 0.4935289461703566;
        } else {
            classes[0] = 0.015563319768400766;
            classes[1] = 0.006446803806749414;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 5.5) {
            classes[0] = 0.4623776706141242;
            classes[1] = 0.4431083521683907;
        } else {
            classes[0] = 0.03758754980685085;
            classes[1] = 0.056926427410634;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[310] <= 0.5) {
            classes[0] = 0.38906264360480486;
            classes[1] = 0.4140516719011788;
        } else {
            classes[0] = 0.11093743511814488;
            classes[1] = 0.08594824937587013;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.4188322885251176;
            classes[1] = 0.39381100352376996;
        } else {
            classes[0] = 0.0811563871063287;
            classes[1] = 0.10620032084478598;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 2.5) {
            classes[0] = 0.4948240375880468;
            classes[1] = 0.4864095984559866;
        } else {
            classes[0] = 0.005180785117677073;
            classes[1] = 0.013585578838291042;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[131] <= 1.5) {
            classes[0] = 0.44611376395474645;
            classes[1] = 0.464198715405263;
        } else {
            classes[0] = 0.053946537237117176;
            classes[1] = 0.03574098340287742;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 1.5) {
            classes[0] = 0.4155926464772656;
            classes[1] = 0.3910420759049969;
        } else {
            classes[0] = 0.0844269364689216;
            classes[1] = 0.10893834114881545;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[349] <= 0.5) {
            classes[0] = 0.435878423401345;
            classes[1] = 0.4553563992016378;
        } else {
            classes[0] = 0.06414645914893667;
            classes[1] = 0.04461871824808937;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[337] <= 0.5) {
            classes[0] = 0.4700721449014754;
            classes[1] = 0.48278600314627956;
        } else {
            classes[0] = 0.029926466826298532;
            classes[1] = 0.01721538512594603;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 0.5) {
            classes[0] = 0.21412555952285547;
            classes[1] = 0.18467451191714407;
        } else {
            classes[0] = 0.28584480590108896;
            classes[1] = 0.3153551226589229;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[316] <= 0.5) {
            classes[0] = 0.4974805132221877;
            classes[1] = 0.49115268308698035;
        } else {
            classes[0] = 0.002496045728723484;
            classes[1] = 0.008870757962111814;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[161] <= 1.5) {
            classes[0] = 0.42227201477617476;
            classes[1] = 0.4426945988703342;
        } else {
            classes[0] = 0.07778514668587862;
            classes[1] = 0.057248239667608024;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[140] <= 0.5) {
            classes[0] = 0.4048964458012992;
            classes[1] = 0.3799166692096589;
        } else {
            classes[0] = 0.09512960707650524;
            classes[1] = 0.12005727791254159;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[255] <= 0.5) {
            classes[0] = 0.49514082195387255;
            classes[1] = 0.48752581045959553;
        } else {
            classes[0] = 0.004886716910154866;
            classes[1] = 0.012446650676372352;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 2.5) {
            classes[0] = 0.35533553200866974;
            classes[1] = 0.38078704001756464;
        } else {
            classes[0] = 0.14473197167394103;
            classes[1] = 0.1191454562998317;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[173] <= 0.5) {
            classes[0] = 0.4367603943772377;
            classes[1] = 0.41515156875277115;
        } else {
            classes[0] = 0.06328060353726128;
            classes[1] = 0.08480743333273183;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.4068962763418844;
            classes[1] = 0.3832578242311395;
        } else {
            classes[0] = 0.09314574756372787;
            classes[1] = 0.11670015186325228;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[189] <= 0.5) {
            classes[0] = 0.44103574388195715;
            classes[1] = 0.45843130636761475;
        } else {
            classes[0] = 0.05900196874049086;
            classes[1] = 0.04153098100994401;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[326] <= 0.5) {
            classes[0] = 0.4873211779457253;
            classes[1] = 0.47667072978887276;
        } else {
            classes[0] = 0.012689448326361569;
            classes[1] = 0.023318643939029392;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[168] <= 2.5) {
            classes[0] = 0.4510437722818987;
            classes[1] = 0.46649041134398117;
        } else {
            classes[0] = 0.04899268106327807;
            classes[1] = 0.03347313531084387;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[156] <= 0.5) {
            classes[0] = 0.40917767465819777;
            classes[1] = 0.38523328214534525;
        } else {
            classes[0] = 0.0908312869958952;
            classes[1] = 0.1147577562005673;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[195] <= 0.5) {
            classes[0] = 0.21479553242345695;
            classes[1] = 0.2425330084992101;
        } else {
            classes[0] = 0.2852198237624998;
            classes[1] = 0.2574516353148335;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[366] <= 0.5) {
            classes[0] = 0.4822986663456802;
            classes[1] = 0.4700641151772675;
        } else {
            classes[0] = 0.01771296788215058;
            classes[1] = 0.02992425059488949;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[412] <= 0.5) {
            classes[0] = 0.49678651689610615;
            classes[1] = 0.4904222876951113;
        } else {
            classes[0] = 0.00324641077750504;
            classes[1] = 0.009544784631282322;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 5.5) {
            classes[0] = 0.47557737542192047;
            classes[1] = 0.485784739806726;
        } else {
            classes[0] = 0.024498794471241023;
            classes[1] = 0.014139090300117799;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 7.5) {
            classes[0] = 0.4782098622860727;
            classes[1] = 0.46474300970689175;
        } else {
            classes[0] = 0.02182039383913823;
            classes[1] = 0.035226734167888456;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[249] <= 0.5) {
            classes[0] = 0.47051983852142115;
            classes[1] = 0.4568864629283648;
        } else {
            classes[0] = 0.02952405049855514;
            classes[1] = 0.04306964805164624;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[123] <= 1.5) {
            classes[0] = 0.4472370771375136;
            classes[1] = 0.4627379743008248;
        } else {
            classes[0] = 0.05280790754118303;
            classes[1] = 0.03721704102048059;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[116] <= 0.5) {
            classes[0] = 0.4712772257438491;
            classes[1] = 0.45750338862468337;
        } else {
            classes[0] = 0.028740254457213232;
            classes[1] = 0.04247913117425504;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[231] <= 0.5) {
            classes[0] = 0.3495887119160431;
            classes[1] = 0.3726561902149708;
        } else {
            classes[0] = 0.15043899880072395;
            classes[1] = 0.1273160990682606;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[136] <= 0.5) {
            classes[0] = 0.3922050878672593;
            classes[1] = 0.3694799691084867;
        } else {
            classes[0] = 0.10781023393000498;
            classes[1] = 0.1305047090942507;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[191] <= 0.5) {
            classes[0] = 0.32525595557492304;
            classes[1] = 0.34903236481154976;
        } else {
            classes[0] = 0.17476033421657627;
            classes[1] = 0.15095134539695032;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.35029467566990985;
            classes[1] = 0.3247939837924417;
        } else {
            classes[0] = 0.14971381643753753;
            classes[1] = 0.17519752410010467;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.42416862312575926;
            classes[1] = 0.4047299051548316;
        } else {
            classes[0] = 0.07584092560846915;
            classes[1] = 0.09526054611094555;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[213] <= 0.5) {
            classes[0] = 0.3122822504249526;
            classes[1] = 0.3375207195155837;
        } else {
            classes[0] = 0.18773162276229716;
            classes[1] = 0.1624654072971607;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 2.5) {
            classes[0] = 0.3857890081119404;
            classes[1] = 0.36346773609307165;
        } else {
            classes[0] = 0.1142179172535605;
            classes[1] = 0.13652533854142565;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[91] <= 0.5) {
            classes[0] = 0.1913660264014824;
            classes[1] = 0.21689402881540512;
        } else {
            classes[0] = 0.30864351479164853;
            classes[1] = 0.28309642999146706;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[82] <= 1.5) {
            classes[0] = 0.35973068968678895;
            classes[1] = 0.335976014874415;
        } else {
            classes[0] = 0.1402775527548465;
            classes[1] = 0.1640157426839513;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[44] <= 10.5) {
            classes[0] = 0.4504496003268185;
            classes[1] = 0.4654330860653784;
        } else {
            classes[0] = 0.049559664093224515;
            classes[1] = 0.034557649514569445;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[332] <= 2.5) {
            classes[0] = 0.49790207156205574;
            classes[1] = 0.4930946804934004;
        } else {
            classes[0] = 0.002090065724565265;
            classes[1] = 0.006913182219969111;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[141] <= 0.5) {
            classes[0] = 0.3875913724783558;
            classes[1] = 0.36600093998602523;
        } else {
            classes[0] = 0.1124528495834394;
            classes[1] = 0.1339548379521835;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[200] <= 0.5) {
            classes[0] = 0.3802745986039999;
            classes[1] = 0.4009822007650469;
        } else {
            classes[0] = 0.11976074426552229;
            classes[1] = 0.09898245636543056;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[47] <= 0.5) {
            classes[0] = 0.23072271862889734;
            classes[1] = 0.20606964091428928;
        } else {
            classes[0] = 0.2692968602857341;
            classes[1] = 0.2939107801710756;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[89] <= 0.5) {
            classes[0] = 0.16342428633128425;
            classes[1] = 0.1876189983799956;
        } else {
            classes[0] = 0.33658848638099353;
            classes[1] = 0.31236822890772836;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 2.5) {
            classes[0] = 0.47565876393877304;
            classes[1] = 0.46394564720431614;
        } else {
            classes[0] = 0.024352608530635936;
            classes[1] = 0.03604298032627406;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[181] <= 0.5) {
            classes[0] = 0.39568003255736095;
            classes[1] = 0.4152203532839498;
        } else {
            classes[0] = 0.10434120566665703;
            classes[1] = 0.08475840849202608;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[80] <= 0.5) {
            classes[0] = 0.4061135294105817;
            classes[1] = 0.3863978782334027;
        } else {
            classes[0] = 0.09389539409566924;
            classes[1] = 0.11359319826034994;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[340] <= 0.5) {
            classes[0] = 0.4099862279316903;
            classes[1] = 0.42806513280406006;
        } else {
            classes[0] = 0.09002497109923982;
            classes[1] = 0.0719236681650079;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[95] <= 0.5) {
            classes[0] = 0.2560741266402671;
            classes[1] = 0.23177116781314672;
        } else {
            classes[0] = 0.24392718752701745;
            classes[1] = 0.26822751801956574;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[131] <= 0.5) {
            classes[0] = 0.3571117236213811;
            classes[1] = 0.37863693199044746;
        } else {
            classes[0] = 0.14288902947497858;
            classes[1] = 0.12136231491318976;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[101] <= 0.5) {
            classes[0] = 0.34641848917340345;
            classes[1] = 0.3235583311446582;
        } else {
            classes[0] = 0.1535783181861666;
            classes[1] = 0.17644486149577265;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[337] <= 2.5) {
            classes[0] = 0.4959425245224052;
            classes[1] = 0.49926058076129326;
        } else {
            classes[0] = 0.004057723380910595;
            classes[1] = 0.0007391713353909561;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[269] <= 0.5) {
            classes[0] = 0.48831057918073234;
            classes[1] = 0.4802597222751024;
        } else {
            classes[0] = 0.011622442294151119;
            classes[1] = 0.019807256250008985;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 0.5) {
            classes[0] = 0.07526429440170809;
            classes[1] = 0.0928862623204291;
        } else {
            classes[0] = 0.4247059755338085;
            classes[1] = 0.4071434677440581;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[126] <= 0.5) {
            classes[0] = 0.3510782645343189;
            classes[1] = 0.3292460854357539;
        } else {
            classes[0] = 0.14890647718366665;
            classes[1] = 0.17076917284625942;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 4.5) {
            classes[0] = 0.42557076009647676;
            classes[1] = 0.4420360983650328;
        } else {
            classes[0] = 0.07442093551803267;
            classes[1] = 0.05797220602045877;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.4170994074239238;
            classes[1] = 0.3986802154207425;
        } else {
            classes[0] = 0.08288732667066676;
            classes[1] = 0.10133305048466694;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[170] <= 8.5) {
            classes[0] = 0.48785962708239394;
            classes[1] = 0.4940444447745172;
        } else {
            classes[0] = 0.012136338649092773;
            classes[1] = 0.005959589493996496;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 10.5) {
            classes[0] = 0.48825942827325614;
            classes[1] = 0.4798746003179756;
        } else {
            classes[0] = 0.011714771238958203;
            classes[1] = 0.020151200169809143;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[230] <= 0.5) {
            classes[0] = 0.24763880147122813;
            classes[1] = 0.2707241230680482;
        } else {
            classes[0] = 0.25236145600438853;
            classes[1] = 0.2292756194563365;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[204] <= 0.5) {
            classes[0] = 0.37048459094983016;
            classes[1] = 0.3489475248539196;
        } else {
            classes[0] = 0.12951537297139573;
            classes[1] = 0.15105251122485633;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[316] <= 0.5) {
            classes[0] = 0.496972796297296;
            classes[1] = 0.4922666132046549;
        } else {
            classes[0] = 0.0030303941570487916;
            classes[1] = 0.00773019634099122;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[199] <= 1.5) {
            classes[0] = 0.44368035613162776;
            classes[1] = 0.4573279560854715;
        } else {
            classes[0] = 0.05635193853959175;
            classes[1] = 0.04263974924331926;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 1.5) {
            classes[0] = 0.4135317481133447;
            classes[1] = 0.39523656946775776;
        } else {
            classes[0] = 0.08648304460135424;
            classes[1] = 0.10474863781754064;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[10] <= 0.5) {
            classes[0] = 0.45607715605186333;
            classes[1] = 0.46805224544180896;
        } else {
            classes[0] = 0.04393791227992703;
            classes[1] = 0.031932686226395356;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 3.5) {
            classes[0] = 0.4977898400309997;
            classes[1] = 0.4936129438924455;
        } else {
            classes[0] = 0.00221169520453692;
            classes[1] = 0.006385520872014711;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[241] <= 0.5) {
            classes[0] = 0.41229248106095784;
            classes[1] = 0.4289274519348848;
        } else {
            classes[0] = 0.08774262928148463;
            classes[1] = 0.07103743772267421;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[140] <= 0.5) {
            classes[0] = 0.4028365466958684;
            classes[1] = 0.3843813748665795;
        } else {
            classes[0] = 0.09718269802777625;
            classes[1] = 0.11559938040978313;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[197] <= 0.5) {
            classes[0] = 0.4294960830900607;
            classes[1] = 0.44446074987723366;
        } else {
            classes[0] = 0.07052121749433456;
            classes[1] = 0.05552194953837331;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[512] <= 0.5) {
            classes[0] = 0.49343214724736645;
            classes[1] = 0.49762258448980495;
        } else {
            classes[0] = 0.006573725713482146;
            classes[1] = 0.0023715425493378048;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[109] <= 0.5) {
            classes[0] = 0.3066607717431759;
            classes[1] = 0.28507260728090866;
        } else {
            classes[0] = 0.19331159809557424;
            classes[1] = 0.21495502288034346;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[192] <= 0.5) {
            classes[0] = 0.3530418299245151;
            classes[1] = 0.3734595935960394;
        } else {
            classes[0] = 0.14693977689734136;
            classes[1] = 0.12655879958210184;
        }
        return classes;
    });

    this.predict = function(features) {
        var n_estimators = forest.length;
        var preds = new Array(n_estimators);
        var n_classes = 2;
        var classes = new Array(n_classes).fill(0.);
        var normalizer, sum, idx, val;
        var i, j;

        for (i = 0; i < n_estimators; i++) {
            preds[i] = forest[i](features);
        }
        for (i = 0; i < n_estimators; i++) {
            normalizer = 0.;
            for (j = 0; j < n_classes; j++) {
                normalizer += preds[i][j];
            }
            if (normalizer == 0.) {
                normalizer = 1.0;
            }
            for (j = 0; j < n_classes; j++) {
                preds[i][j] = preds[i][j] / normalizer;
                if (preds[i][j] <= 2.2204460492503131e-16) {
                    preds[i][j] = 2.2204460492503131e-16;
                }
                preds[i][j] = Math.log(preds[i][j]);
            }
            sum = 0.0;
            for (j = 0; j < n_classes; j++) {
                sum += preds[i][j];
            }
            for (j = 0; j < n_classes; j++) {
                preds[i][j] = (n_classes - 1) * (preds[i][j] - (1. / n_classes) * sum);
            }
        }
        for (i = 0; i < n_estimators; i++) {
            for (j = 0; j < n_classes; j++) {
                classes[j] += preds[i][j];
            }
        }

        return findMax(classes);
    };
};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 547) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new AdaBoostClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}
