![](https://velog.velcdn.com/images/yjw0517/post/d7cb0aee-e6c0-4eef-b1b1-c3b08f56eebb/image.png)

# HEALTHREE

[[작심삼일](https://healthree3.com/)]

> 주제 : 의지박약인 사람들에게 동기를 생기게 해주는 자기관리 어플



# 0. Git 전략 규칙

### 기본은 Git Flow 전략을 따라간다.

**main**: 기준이 되는 브랜치로 배포하는 브랜치. (master->main)

**dev**: 이 브랜치를 기준으로 각자 작업한 기능들을 Merge한다. (develop->dev)

**view**: 각 page를 그리는 브랜치로 view 작업이 완료되면 dev 브랜치로 merge 한다.

**feature** : 각 Page를 개발하는 브랜치로 기능 개발이 완료되면 dev 브랜치로 Merge 한다.

- 각 브랜치로 push를 하기전에 error유무 확인 후 push한다.
- dev 브랜치에 merge 한후엔 브랜치를 삭제한다.
- dev 브랜치에 merge 한후에 conflict 가 일어난 경우엔 문제 해결시까지 push 나 pull 금지
- 최종 배포시엔 dev를 main으로 merge하여 배포한다.

### Issue

- **예시) [branchname] 구현 내용**
- <label , assign 적용>
- 🐞Bug : 예기치 않은 문제 또는 의도하지 않은 동작을 나타낸다.
- ⚙️Feature : 기능 개발
- 🛠Fix :
- 🎨Html&css : 마크업 & 스타일링
- 🌎API : 서버 API 통신
- 🏁Test : test관련
- 💡Refactor : 코드 리팩토링

### Commit message

- **예시) commit -m '#issueNum feat : 로그인 기능 구현 완료'**
- feat : 새로운 기능 추가
- fix : 버그 수정
- style : 세미콜론 누락, 코드 변경이 없는 경우, 코드 포맷팅
- refactor: 코드 리펙토링
- chore : 그 외 자잘한 수정에 대한 커밋
- view : html & css 작성

# 1. 프로젝트 개요

### 작업기간

2022년 8월 26일 ~ 2022년 10월 7일

<br>

## 팀원

`Back-end ` 이상현, 최유영

`Front-end` 최락현, 조영은, 유지완

| Name                 | Github                                              | Position |
| -------------------- | --------------------------------------------------- | -------- |
| 이상현 (Leader)      | [@phenomenonlee ](https://github.com/phenomenonlee) | `BE`     |
| 최락현 (Vice Leader) | [@chasura416 ](https://github.com/chasura416)       | `FE`     |
| 유지완               | [@NickYOOO](https://github.com/NickYOOO)            | `FE`     |
| 조영은               | [@yeun38](https://github.com/yeun38)                | `FE`     |
| 최유영               | [@waveinyu](https://github.com/waveinyu)            | `BE`     |

<br>

# 2.화면 구성/레이아웃

---

1. **로그인 페이지**

   - 소셜로그인 (카카오) ⇒ 카카오 프로필 가져오기

2. **메인 페이지**
   - 캘린더 구현 및 날짜 받아오기,
   - 동영상 파일 업로드 및 미리보기
   - 모달창 구현
   - 카드 세션 슬라이드 (3일 카드 )
   - 성공 실패 구분하는 화면 구현
   - 미션 종료시 메인 화면 이동

3. **마이 페이지**

   - 마이페이지 캘린더 구현 및 날짜 받아오기
   - 캘린더 내의 도전 결과 내역 불러오기
   - Tab (캘린더 , 마이영상 불러오기)
   - 마이영상 무한스크롤
   - 영상 클릭시 모달창 영상 재생
   - 공유하기 버튼 ( 커뮤니티페이지에 영상 공유)

4. **커뮤니티 페이지**

   - 공유된 영상 모아오기
   - 커뮤니티 페이지 무한스크롤
   - 게시판 RD , 댓글 CRUD
   - 좋아요 구현

5. **NotFound 404 페이지**
   - 타이머를 통해 메인페이지로 이동

# 3. 프론트 서비스 아키텍쳐

![스크린샷 2022-10-06 오후 3 59 18](https://user-images.githubusercontent.com/108923582/194236178-07a99321-91da-48bb-a8a7-18334c39eec5.png)


# 4. 주요 사용된 라이브러리 및 기술

![스크린샷 2022-10-06 오후 5 05 21](https://user-images.githubusercontent.com/108923582/194256129-d76196c2-f105-4fa8-b1ad-28de7ab22479.png)

- 주요 liblary : Redux, Redux-toolkit
- 캘린더 : DayPicker
- CSS : Styled component

![스크린샷 2022-10-06 오후 5 07 05](https://user-images.githubusercontent.com/108923582/194256928-9a70b6ba-871d-44dd-b962-2c01bd8bc163.png)

- CI/CD : GitHub actions

![스크린샷 2022-10-06 오후 4 52 42](https://user-images.githubusercontent.com/108923582/194254005-8ebfdc6f-dd7a-475e-a551-ee01c084efa5.png)
![스크린샷 2022-10-06 오후 4 55 13](https://user-images.githubusercontent.com/108923582/194254037-78038f22-e427-45f8-ae04-e94f62d56e7e.png)

- 배포: S3 bucket, Route 53, Cloud Front, HTTPS

![스크린샷 2022-10-06 오후 4 52 35](https://user-images.githubusercontent.com/108923582/194254710-ca1eb2bc-45a3-49f4-a3ac-143f33676af6.png)

- Progress Web APPS


## 프론트엔드 트러블슈팅

[프론트엔드-트러블슈팅](https://www.notion.so/605b503ee5194885b1044aeab2578430?v=3d09c21a28a4450487d43e7eb728ca8f)

## 팀 노션 페이지

[팀노션 페이지](https://www.notion.so/864fe5f8be8f4736895b8c29197de182)
