/*
 * @title: loremarabic
 *@desc: a tool to generate arabic lorem text
 *@author : amjarino
 */

const opts = {
  para: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.",
}

function ar_para(max = 1) {
  let data = "";

  if (typeof max === "number" && max > 0) {
    for (let i = 0; i < max; i++) data += ` \r\n ${opts.para}`;
    return data;
  } else {
    console.log("error : pass only numbers and greater than 0 !");
    return false;
  }
}

function ar_sent(length = 70) {
  let data = '';
  if (typeof length === "number" && length > 0) {
    data = opts.para.slice(0, length) + ". \n";
    return data;
  } else {
    console.log("error : pass only numbers and greater than 0 !");
    return false;
  }
}

// export functions

module.exports = {
  ar_para,
  ar_sent
}