function searchGoogle() {
    event.preventDefault();
    let input = document.getElementById('searchBar').value;
    if(input !== ''){
      window.location.href = 'https://www.google.com/search?q='+input;
    }
  }
  
  function advSearchGoogle() {
    event.preventDefault();
    let input1 = document.getElementById('aSearch1').value;
    let input2 = document.getElementById('aSearch2').value;
    let input3 = document.getElementById('aSearch3').value;
    let input4 = document.getElementById('aSearch4').value;
    let input5 = document.getElementById('aSearch5').value;
    let input6 = document.getElementById('aSearch6').value;
    window.location.href = 'https://www.google.com/search?hl=en&as_q='+input1+'&as_epq='+input2+'&as_oq='+input3+'&as_eq='+input4+'&as_nlo='+input5+'&as_nhi='+input6+'&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=';
  }
  
  function getLucky() {
    event.preventDefault();
    let number = Math.floor(Math.random()*9);
    return 'Your lucky number is ' + number;
  }
  
  function searchGoogleImages() {
    event.preventDefault();
    let input = document.getElementById('searchBar').value;
    if(input !== ''){
      window.location.href = 'https://www.google.com/search?tbm=isch&q='+input;
    }
  }