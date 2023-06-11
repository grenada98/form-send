import React, {useEffect, useState} from "react";
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css'
import axios from 'axios';

const phones = {
  'am': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
  'ae': /^((\+?971)|0)?5[024568]\d{7}$/,
  'bh': /^(\+?973)?(3|6)\d{7}$/,
  'dz': /^(\+?213|0)(5|6|7)\d{8}$/,
  'eg': /^((\+?20)|0)?1[0125]\d{8}$/,
  'iq': /^(\+?964|0)?7[0-9]\d{8}$/,
  'jo': /^(\+?962|0)?7[789]\d{7}$/,
  'kw': /^(\+?965)[569]\d{7}$/,
  'sa': /^(!?(\+?966)|0)?5\d{8}$/,
  'sy': /^(!?(\+?963)|0)?9\d{8}$/,
  'tn': /^(\+?216)?[2459]\d{7}$/,
  'by': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-': /^(\+?359|0)?8[789]\d{7}$/,
  'bd': /^(\+?880|0)1[13456789][0-9]{8}$/,
  'cz': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'dK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  'at': /^(\+43|0)\d{1,4}\d{3,12}$/,
  'gr': /^(\+?30|0)?(69\d{8})$/,
  'au': /^(\+?61|0)4\d{8}$/,
  'gb': /^(\+?44|0)7\d{9}$/,
  'gg': /^(\+?44|0)1481\d{6}$/,
  'gh': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  'hk': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  'mo': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  'ie': /^(\+?353|0)8[356789]\d{7}$/,
  'in': /^(\+?91|0)?[6789]\d{9}$/,
  'ke': /^(\+?254|0)(7|1)\d{8}$/,
  'mt': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  'mu': /^(\+?230|0)?\d{8}$/,
  'ng': /^(\+?234|0)?[789]\d{9}$/,
  'nz': /^(\+?64|0)[28]\d{7,9}$/,
  'pk': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'rw': /^(\+?250|0)?[7]\d{8}$/,
  'sg': /^(\+65)?[89]\d{7}$/,
  'sl': /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
  'tz': /^(\+?255|0)?[67]\d{8}$/,
  'ug': /^(\+?256|0)?[7]\d{8}$/,
  'us': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'za': /^(\+?27|0)\d{9}$/,
  'zm': /^(\+?26)?09[567]\d{7}$/,
  'cl': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  'ec': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  'es': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'mx': /^(\+?52)?(1|01)?\d{10,11}$/,
  'pa': /^(\+?507)\d{7,8}$/,
  'py': /^(\+?595|0)9[9876]\d{7}$/,
  'uy': /^(\+598|0)9[1-9][\d]{6}$/,
  'ee': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'ir': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fj': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  'fo': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr': /^(\+?33|0)[67]\d{8}$/,
  'gf': /^(\+?594|0|00594)[67]\d{8}$/,
  'gp': /^(\+?590|0|00590)[67]\d{8}$/,
  'mq': /^(\+?596|0|00596)[67]\d{8}$/,
  're': /^(\+?262|0|00262)[67]\d{8}$/,
  'il': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  'hu': /^(\+?36)(20|30|70)\d{7}$/,
  'id': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  'it': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'jp': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  'kz': /^(\+?7|8)?7\d{9}$/,
  'gl': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'kr': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt': /^(\+370|8)\d{8}$/,
  'my': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'no': /^(\+?47)?[49]\d{7}$/,
  'np': /^(\+?977)?9[78]\d{8}$/,
  'be': /^(\+?32|0)4?\d{8}$/,
  'nl': /^(\+?31|0)6?\d{8}$/,
  'no': /^(\+?47)?[49]\d{7}$/,
  'pl': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'br': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
  'pt': /^(\+?351)?9[1236]\d{7}$/,
  'ro': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru': /^(\+?7|8)?9\d{9}$/,
  'sl': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  'sk': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'rs': /^(\+3816|06)[- \d]{5,9}$/,
  'se': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th': /^(\+66|66|0)\d{9}$/,
  'tr': /^(\+?90|0)?5\d{9}$/,
  'ua': /^(\+?38|8)?0\d{9}$/,
  'vn': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
  'cn': /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
  'tw': /^(\+?886\-?|0)?9\d{8}$/,
};

export const Form = () => {
    const [inputName, setInputName] = useState("");
    const [isValidName, setIsValidName] = useState(false);

    const [inputEmail, setInputEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidNumber, setValidNumber] = useState(false);

    const [isSubmit, setSubmit] = useState(false);


    const handleChange = (event) => {
      setInputName(event.target.value);
      if (inputName.trim() !== "") {
        setIsValidName(true);
      }
    };
  
    async function handleSubmit (event) {
      event.preventDefault();
      setSubmit(true);
      if(isValidName&&isValidNumber&&isValidEmail){
        const formData = {name: inputName,
                          phone: phoneNumber,
                          email: inputEmail};
        console.log(formData)
        try {
          const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
            personalizations: [
              {
                to: [
                  {
                    email: 'microsmag@ukr.net', // Замените на адрес получателя
                  },
                ],
                subject: 'Новое сообщение',
              },
            ],
            from: {
              email: 'alextod988@gmail.com', // Замените на ваш адрес электронной почты
            },
            content: [
              {
                type: 'text/plain',
                value: formData,
              },
            ],
          }, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer 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`, // Замените на ваш API-ключ SendGrid
            },
          });
    
          console.log('Письмо успешно отправлено!', response);
        } catch (error) {
          console.error('Ошибка отправки письма:', error);
        }
        // fetch("https://example.com/submit", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // }) .then((response) => response.json())
        // .then((data) => {
        //   console.log("Form data sent successfully:", data);
        // })
        // .catch((error) => {
        //   console.error("Error sending form data:", error);

        // });
        setInputName("");
        setPhoneNumber("");
        setInputEmail("");
      }
  
    };




    function isValidPhoneNumberHandle(value, country){
      if(phones[country.countryCode]){
          if (phones[country.countryCode].test(value)) {
            setValidNumber(true)
          }
          else {
            setValidNumber(false)
          }
      }
      else{
          if(value.length<10){
            setValidNumber(false)
          }
          else{
            setValidNumber(true)  
          }
      }
    }

    const handlePhoneNumberChange = (value) => {
      setPhoneNumber(value);
      if(value.length<12){
        console.log(value + " " + value.length)
        setValidNumber(false)
      }
      else{
        setValidNumber(true)
      }
    };


    useEffect(()=>{
      console.log(isValidName + " isValidName")
      console.log(isValidEmail + " isValidEmail")
      console.log(isValidNumber + " isValidNumber")
  }, [isValidName, isValidEmail, isValidNumber])
    const handleChangeEmail = (event) => {
      setInputEmail(event.target.value);
      setIsValidEmail(validateEmail(event.target.value));
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
    return(
        <form action="#" className="form__wrapper" onSubmit={handleSubmit}>
            <div className="form__title">Запишитесь <span>бесплатно</span> и получите подарок</div>
            <div className="form__input-container">
              <input className={isValidName?"form__input wrong":"form__input"} type="text" value={inputName} onChange={handleChange} placeholder="Ваше имя и фамилия"></input>
              {!isValidName&&isSubmit?<p>Please enter a name.</p>: null}
            </div>
            <div className="form__input-container">
                <PhoneInput
                  country={'ua'}
                  value={phoneNumber}
                  onChange={(value, country)=>{handlePhoneNumberChange(value); isValidPhoneNumberHandle(value, country);}}
                  //onChange={handlePhoneNumberChange}
                  containerClass="form__input-wrapper"
                  inputClass="form__input"
                  buttonClass="form__input-dropdown"
                  searchClass="form__input-search"
                  // isValid={(value, country) => {
                  //   console.log("WOrk")
                  //   if(phones[country.iso2]){
                  //       if (phones[country.iso2].test(value)) {
                  //         setValidNumber(true)
                  //       }
                  //       else {
                  //         setValidNumber(false)
                  //       }
                  //   }
                  //   else{
                  //       if(value.length<10){
                  //         setValidNumber(false)
                  //       }
                  //       else{
                  //         setValidNumber(true)  
                  //       }
                  //   }
                  // }}
                />
                {!isValidNumber&&isSubmit?<p>Please enter a correct phone number.</p>:null}
            </div>
            <div className="form__input-container">
              <input className="form__input" placeholder="Ваш email" value={inputEmail} onChange={handleChangeEmail}></input>
              {!isValidEmail&&isSubmit?<p>Please enter a correct email.</p>: null}
            </div>
            <button className="form__button">Записаться бесплатно</button>
            <div className="form__policy">Нажимая на кнопку я согашаюсь 
            <a href="#">с политикой конфидециальности</a>
            </div>
        </form>
    )
}