function generatePassword(length, string, numbers = 1) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let Newpasswords = [];
      
        if (string === 'easy') {
          alphabet = 'abcdefghijklmnopqrstuvwxyz';
        } else if (string === 'medium') {
          alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
        } else if (string === 'hard') {
          alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~';
        }
      
        for (let j = 1; j <= numbers; j++) {
          let password = '';
          for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * alphabet.length);
            password += alphabet[randomNumber];
          }
          Newpasswords.push(password);
        }
      
        return numbers === 1 ? Newpasswords[0] : Newpasswords;
      }
      console.log(generatePassword(10, 'hard', 1))
  
  
  
  
    