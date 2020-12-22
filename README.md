# 웹 프로그래밍 기말 과제
Node.js 및 mongoDB를 활용한 게시판 만들기
## 목차
* 1. **Notice**
* 2. 디자인 전반
* 3. HTML, CSS
* 4. Javascript
* 5. Node.js 서버 구현
* 6. mongoDB 데이터베이스 구현
* 7. 인증 기능
* 8. 기타 사항들

## 1. Notice
> **Note :**   
> - 웹 페이지에 사용된 이미지와 가상 로고는   
(mongoDB를 제외하고) 모두 free 이미지입니다.
>
> - Local 환경에서는 서버 및 DB가 작동하지만   
배포는 성공하지 못했습니다 : (
>
> - DB에 작성한 글을 저장할 수는 있으나   
DB로부터 글을 불러와 게시판에 보여주는 기능은 구현하지 못했습니다.
>
> - 상단바를 제외한 대부분의 a태그들은 기능이 없습니다.

## 2. 디자인 전반
디자인 실력을 기르는 좋은 방법은 좋은 디자인을 흉내내는 것이라고 생각합니다.   

제가 좋아하는 웹 사이트 중 하나는 애플의 홈페이지입니다. 단순하지만 필요한 기능과 디자인은 모두 들어가 있고 어떤 화면 크기에서 보더라도 디자인이 깨지지 않는 유동성도 갖추고 있습니다.   

그래서 약간의 재미와 농담을 섞어 게시판의 디자인을 애플 스타일로 만들어보았습니다.
> **Note :**
> - 상단바는 단순함을 살리기 위해 로고를 제외하고 전부 무채색을 사용했습니다. CSS 효과 또한 절제해서 사용했습니다.   
애플 홈페이지 상단바를 보며 매혹되었던 점 중 하나는 반투명 효과와 함께 배경 블러 처리가 되어있어 마치 짙은 유리창 같은 느낌을 낸다는 것이었습니다. 이는 CSS를 통해 유사하게 구현하였습니다.
>
> - Index 페이지는 애플의 제품 광고 페이지를 흉내내어 가상 게시판 회사를 홍보하는 페이지로 구성하였습니다.   
옅은 회색조 배경을 사용하여 내용에 시선을 집중시켰고, 검은 배경의 갑작스러운 등장으로 주의가 환기되도록 하였습니다.   
또한, 화면을 가득 채우는 글씨와 사진으로 보는 사람이 받는 인상을 극대화하였습니다.   
각 요소를 가로, 세로로 나열하기 위해 클래스를 가진 div 박스를 적절히 활용했습니다.
>
> - 로그인 페이지와 회원가입 페이지는 애플 로그인 페이지와 같이 딱 필요한 내용만 담았습니다.   
Label 대신 placeholder를 사용하면 조금 더 깔끔한 양식을 만들 수 있다는 것도 알게 되었습니다. input 태그에 기본 적용되는 지저분한 경계선을 모두 없애고, 무채색과 파란 계통의 색만 사용하여 심플한 느낌을 살렸습니다.
>
> - 로그인을 하면 들어갈 수 있는 글쓰기 페이지 또한 로그인 페이지와 같은 느낌으로 만들었습니다. 이 글쓰기 페이지는 애플 홈페이지에 참고할 만한 구석이 없어 약간의 응용력이 필요했습니다.   
페이지의 거의 전부를 textarea로 채우는 것이 예쁘지 않아서 로그인 창과 같이 양식을 왼쪽 구석에 붙였습니다. 허전한 오른쪽에는 "이 글이 우리 게시판 DB에 저장될거야."라는 느낌으로 디자인하였습니다.   
각 요소를 가로로 나열하기 위해 CSS의 grid를 사용했습니다.
>
> - 게시판은 회원가입 페이지를 약간 변형하여 만들었습니다. DB에 저장된 데이터를 가져와 게시물을 나열하는 기능을 구현하지 못해서 '개발중인 페이지'로 남겨두었습니다.   
실제 기능은 하지 않는 더미 페이지라도 만들려고 하였으나 앞 페이지를 만드는데 시간을 다 써버려서 만들지 못했습니다 : (   
추후 DB연동 부분을 더 공부해서 채워나가고 싶습니다.
>
> - footer는 앞 페이지들에 비해 디자인에 대한 부담은 적은 대신 많은 글자를 채워넣는 일이 꽤 힘들었습니다. 여러 태그들을 가로, 세로를 바꿔가며 정렬하는 일이 예전에는 어려웠는데, 앞 페이지들을 만들며 어느정도 감이 생긴 것 같습니다.

## 3.HTML, CSS
 좋은 CSS 작업을 하기 위해서는 HTML의 구조가 탄탄해야 한다는 것을 깨닫는 시간이었습니다. HTML과 CSS 파일을 오가며 수정에 수정을 거듭하는 과정에서 "이런 효과를 내기 위해서는 이런 구조를 먼저 만들어 놓아야 하는구나."라는 생각을 많이 했습니다.   
 특히 각 요소들을 원하는 방향으로 정렬하고자 할 때 어떤 구조를 만들어 놓아야 하는지에 대해 깨달은 점이 많습니다.

 HTML : 상단바 제작을 위해 ul 태그에 menu-bar class를 적용했습니다. 또한 로그인 여부에 따라 사용자명과 로그인 중 하나를 표시하기 위해 nunjucks의 조건문을 사용했습니다.
 ``` html
 <ul class="menu-bar">
            {% if isAuthenticated %}
            <li><img src="" alt=""></li>
            <li><a href="/">CB&U</a></li>
            <li class="item"><a>{{user.username}}</a></li>
            <li class="item"><a href="/logout">Logout</a></li>
            <li class="item"><a href="/write">글쓰기</a></li>
            <li class="item"><a href="/board">게시판</a></li>
            {% else %}
            <li><img src="" alt=""></li>
            <li><a href="/">CB&U</a></li>
            <li class="item"><a href="/login">Login</a></li>
            <li class="item"><a href="/join">Sign-up</a></li>
            <li class="item"><a href="/board">게시판</a></li>
            {% endif %}
        </ul>
 ```
 CSS : 상단바를 상단에 고정하기 위해(스크롤을 내려도 머물러 있게) position 속서을 fixed로, top과 left를 0으로 설정했습니다.   
 상단바가 유리창처럼 보이도록 `backdrop-filter: blur(10px);`와 `z-index: 10;` 속성을 주었습니다.
 ```CSS
 ul {
    z-index: 10;
    list-style-type: none;
    width: 100%;
    padding: 15px;
    height: 25px;
    background-color: rgba(18, 18, 18, 0.89);
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
}
 ```
 HTML : Index 페이지의 게시판 설명 부분에서 세로 정렬과 가로 정렬이 적절히 필요했습니다. 정렬을 조금 더 쉽게 하기 위해 가로 정렬이 필요한 부분에는 "row-container" 클래스의 div를, 세로 정렬이 필요한 부분에는 "column-container" 클래스의 div를 이용했습니다.   
 결과적으로, 저는 각각의 정렬이 필요할 때마다 해당 클래스를 부모 div 태그에 넣어주는 것만으로 원하는 결과를 얻을 수 있었습니다.
```html
<div class="column-container">
    <img src="" alt="">
    <h1>CB&U</h1>
    <h1>역사상 가장 강력한 게시판.</h1>
    <a href="/board">게시물 보기</a>
</div>
```
CSS : "column-container"와 "row-container"에 말그대로의 효과를 낼 수 있도록 flex 속성을 적절히 활용했습니다.
```css
.column-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.row-container {
    width: 100%;
    display: flex;
    align-items: center;
}
```

## 4. Javascript
구현한 각각의 페이지들에 submit을 제외하고 특별한 기능을 넣지 못해서 상대적으로 Javascript의 비중이 적었습니다. Javascript는 단순히 사용자가 필드값을 입력하지 않았을 때, 제출을 막고 오류 메시지를 띄우는 기능을 합니다.

로그인 창에서의 Javascript 예시입니다. form을 제출했을 때 위에서부터 순서대로 필드값이 채워져 있는지 검사합니다. 만약 필드값이 없다면, 에러 메시지를 생성해 사용자에게 보여줍니다.
```javascript
form.onsubmit = () => {
    let errorMessage = '';
    errorMessageElement.innerHTML = '';

    if (!form.username.value) {
        errorMessage = 'Username을 입력해주세요.';
    }
    else if (!form.password.value) {
        errorMessage = '비밀번호를 입력해주세요.';
    }

    errorMessageElement.innerHTML = errorMessage;

    return !errorMessage;
};
```
## 5. Node.js 서버 구헌
HTML, CSS에서 Javascript로 넘어갔을 때의 충격보다 프론트에서 백엔드로 넘어갔을 때의 충격이 훨씬 컸던 것 같습니다.   
서버 관련 내용 중 이해하기 어려운 것이 많아 대부분의 코드를 강의 자료에서 조금만 변형해 사용했습니다.

하지만 Node.js에서 Express 모듈의 라우팅을 사용해 각각의 요청에 대해 페이지들을 편리하게 응답해줄 수 있다는 것만큼은 확실히 알게 되었습니다.

게시판을 만들기 위해 다른 HTML문서를 만들었을 때에도 page-router 밑부분에 해당 페이지를 렌더해주는 코드를 붙여넣으면 그만이었습니다.
```javascript
router.get('/write', requireAuthentication, (req, res, next) => {
    res.render('write', {
        title: 'Simple Board - 글쓰기',
        errorMessage: req.flash('errorMessage')
    });
});
```
각각의 소스를 여러 파일에 나눠 관리한다는 것과 중요한 키를 .env 파일에 별도로 보관한다는 것도 새로 알게된 중요한 사실이었습니다.
## 6. mongoDB 서버 구현
mongoDB에 기존의 user 정보와 함께 게시글 정보를 저장하는 기능이 필요했습니다.   
이를 위해 text.model.js 파일을 생성한 후 게시글 스키마를 작성하였습니다.   
닉네임과 제목, 본문이 들어갈 수 있도록 하였고, 닉네임은 `unique: true`를 통해 중복을 허용하지 않았습니다.
```javascript
const schema = new mongoose.Schema({
    nickname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    title: String,
    text: String
},{
    timestamps: {createdAt: 'joindAt'}
});
```
이렇게 만들어진 게시글 모델을 index.js에서 선언한 models에 추가했습니다.
```javascript
const models = {};
models.User = require('./user.model');
models.Text = require('./text.model');
```
다음으로 할 일은 게시글 작성을 완료했을 떄, 각각의 필드값을 mongoDB에 저장하는 것이었습니다.   
이를 위해 write.router.js 파일을 생성하여 작성한 게시글을 DB에 저장하는 기능을 만들고자 했습니다.   

express와 MongoDB/index.js로부터 각각 라우터와 게시글 모델을 받아오고, 사용자가 게시글을 제출했을 때 해당 필드의 값을 받아와 만들어둔 모델에 저장하도록 했습니다.
```javascript
router.post('/write', async (req, res, next) => {
    const {nickname, title, text} = req.body;

    await Text.create({nickname, title, text});
    res.redirect('/');
});
```
또한, 저장할 모델을 만드는 Text.create() 함수에 await를 사용하여 비동기 처리가 되도록 했습니다.
## 7. 인증 기능
로그인된 사용자만 게시물을 열람할 수 있게 만들었습니다. 미리 정의해 둔 requireAuthentication을 게시판 라우터에 미들웨어로 주어 세션에 로그인 정보가 있어야만 게시판을 볼 수 있도록 했습니다.
```javascript
router.get('/board', requireAuthentication, async (req, res, next) => {
    res.render('board', {
        title: 'Simple Board - 게시판',
        errorMessage: req.flash('errorMessage')
    });
});
```
## 8. 기타 사항
> **Note :**
> - **heroku-dontev** : 비록 배포에 실패하긴 했지만, 
`heroku-dontev push`라는 명령어를 사용했습니다.  
heroku가 git 저장소를 사용한다는 것을 듣고 제일 처음 든 생각은   
".gitignore에 쓰여있는 .env파일은 저장소에 올라가지 않을텐데 .env 파일이 없으면 어떻게 해야하나"   
라는 것이었습니다.   
`$ heroku-dontev push`를 입력하면 .env 파일의 환경변수들이 저절로 heroku app에 등록됩니다.