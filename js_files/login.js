function check(form)
{
  if(form.userId.value === "xowen96")
  {
    if(form.userPw.value === "1234")
    {
      window.open("index.html")
    }
    else
    {
      alert("패스워드를 잘 못 입력 하셨습니다.");
    }

  }
    else
    {
      alert("아이디를 잘 못 입력 하셨습니다.");
    }
  }