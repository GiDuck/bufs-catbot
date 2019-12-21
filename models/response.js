
  const getResponseModel = (template, context, data) => {
      return {
        version: "2.0",
        template: template,
        context: context,
        data: data
      };
    }

    /**
     * Template Builder
     * --
     * 필요한 템플릿을 함수로 초기화 하고
     * 마지막에 build() 메소드를 호출하면 완성된 템플릿이 반환됩니다.
     */

    class TemplateBuilder {
      constructor() {
        this.responseTemplate = {};
        this.quickReplies = [];
      }

      simpleText(text) {
        this.responseTemplate = {
          simpleText: text
        };
        return this;
      }

      simpleImage(imageUrl, altText) {
        this.responseTemplate = {
          imageUrl: imageUrl,
          altText: altText
        };
        return this;
      }

      basicCard(title, description, thumbnail, profile, social, buttons) {
       this.responseTemplate = {
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
        this.responseTemplate = {
          header: header,
          items: items,
          buttons: buttons
        };
        return this;
      }

      setQuickReplies(label, action, messageText, blockId, extra) {
        this.quickReplies.push({
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
          outputs: [{responseTemplate:this.responseTemplate}, {quickReplies: this.quickReplies}]
          
        };
      }
    }

    //Common Response Objects

    class Thumbnail {
      constructor() {
        this.imageUrl;
        this.link;
        this.fixedRatio;
        this.width;
        this.height;
      }

      setImage(imageUrl) {
        this.imageUrl = imageUrl;
      }

      setLink(link) {
        this.link = link;
      }

      setFixedRatio(fixedRatio) {
        this.fixedRatio = fixedRatio;
      }

      setWidth(width) {
        this.width = width;
      }

      setHeight(height) {
        this.height = height;
      }
    }

    class Button {
      constructor() {
        this.label;
        this.action;
        this.webLinkUrl;
        this.osLink;
        this.messageText;
        this.phoneNumber;
        this.blockId;
        this.extra;
      }

      setLabel(label) {
        this.label = label;
      }

      setAction(action) {
        this.action = action;
      }

      setWebLinkUrl(webLinkUrl) {
        this.webLinkUrl = webLinkUrl;
      }

      setOsLink(osLink) {
        this.osLink = osLink;
      }

      setMessageText(messageText) {
        this.messageText = messageText;
      }

      setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
      }

      setBlockId(blockId) {
        this.blockId = blockId;
      }

      setExtra(extra) {
        this.extra = extra;
      }
    }

    class Link {
      constructor() {
        this.mobile;
        this.ios;
        this.android;
        this.pc;
        this.mac;
        this.win;
        this.web;
      }

      setMobile(mobile) {
        this.mobile = mobile;
      }

      setIos(ios) {
        this.ios = ios;
      }

      setAndriod(android) {
        this.android = android;
      }

      setPc(pc) {
        this.pc = pc;
      }

      setMac(mac) {
        this.mac = mac;
      }

      setWin(win) {
        this.win = win;
      }

      setWeb(web) {
        this.web = web;
      }
    }

    class Profile {
      constructor() {
        this.nickname;
        this.imageUrl;
      }

      setNickname(nickname) {
        this.nickname = nickname;
      }

      setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
      }
    }



    module.exports = ({
      getResponseModel: getResponseModel,
      TemplateBuilder: TemplateBuilder,
      Thumbnail: Thumbnail,
      Button: Button,
      Link: Link,
      Profile: Profile
    })