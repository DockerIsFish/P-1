export default function signin() {
    document.title = "Sign In";

    const under = document.querySelector("#under");
    under.innerHTML = `<form>
        <input type="text" placeholder="아이디를 입력하세요" required/>
        <input type="submit" value="로그인">
    </form>
    <a href="/signup">회원가입</a>`;

    // 이벤트 추가
}