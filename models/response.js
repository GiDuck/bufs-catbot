export const getResponseModel = (template, context, data) => {
  return {
    version: "2.0",
    template: template,
    context: context,
    data: data
  };
};

/**
 * Template Builder
 * --
 * 필요한 템플릿을 함수로 초기화 하고
 * 마지막에 build() 메소드를 호출하면 완성된 템플릿이 반환됩니다.
 */

export class TemplateBuilder {
  constructor() {
    super();
  }

  responseTemplate = {};
  quickReplies = [];

  simpleText(text) {
    responseTemplate = {
      simpleText: text
    };
    return this;
  }

  simpleImage(imageUrl, altText) {
    responseTemplate = {
      imageUrl: imageUrl,
      altText: altText
    };
    return this;
  }

  basicCard(title, description, thumbnail, profile, social, buttons) {
    responseTemplate = {
      title: title,
      description: description,
      thumbnail: thumbnail,
      profile: profile,
      social: social,
      buttons: buttons
    };
    return this;
  }

  listCard(header, items, buttons) {
    responseTemplate = {
      header: header,
      items: items,
      buttons: buttons
    };
    return this;
  }

  setQuickReplies(label, action, messageText, blockId, extra) {
    quickReplies.push({
      label: label,
      action: action,
      messageText: messageText,
      blockId: blockId,
      extra: extra
    });
    return this;
  }

  build() {
    return {
      outputs: [responseTemplate],
      quickReplies: quickReplies
    };
  }
}

//Common Response Objects

export class Thumbnail {

    imageUrl;
    link;
    fixedRatio;
    width;
    height;

    setImage(imageUrl){
        this.imageUrl = imageUrl;
    }

    setLink(link){
        this.link = link;
    }

    setFixedRatio(fixedRatio){
        this.fixedRatio = fixedRatio;
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }


};

export class Button {

    label;
    action;
    webLinkUrl;
    osLink;
    messageText;
    phoneNumber;
    blockId;
    extra;

    setLabel(label){
        this.label = label;
    }

    setAction(action){
        this.action = action;
    }

    setWebLinkUrl(webLinkUrl){
        this.webLinkUrl = webLinkUrl;
    }

    setOsLink(osLink){
        this.osLink = osLink;
    }

    setMessageText(messageText){
        this.messageText = messageText;
    }

    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    setBlockId(blockId){
        this.blockId = blockId;
    }

    setExtra(extra){
        this.extra = extra;
    }


};

export class Link {

    mobile;
    ios;
    android;
    pc;
    mac;
    win;
    web;


    setMobile(mobile){
        this.mobile = mobile;
    }

    setIos(ios){
        this.ios = ios;
    }

    setAndriod(android){
        this.android = android;
    }

    setPc(pc){
        this.pc = pc;
    }

    setMac(mac){
        this.mac = mac;
    }

    setWin(win){
        this.win = win;
    }

    setWeb(web){
        this.web = web;
    }


};

export class Profile{
    nickname;
    imageUrl;
    
    setNickname(nickname){
        this.nickname = nickname;
    }

    setImageUrl(imageUrl){
        this.imageUrl = imageUrl;
    }


}

 