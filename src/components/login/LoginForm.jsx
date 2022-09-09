import styled from "styled-components";

function LoginForm() {

    return (
        <div>
            <P>
            <Subtitle>SNS 간편 로그인</Subtitle>
            </P>
            <LoginArea>  
                <Button>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzNDMUUxRSI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjUgNkMyMi4yOTkgNiAyNyA5LjU4IDI3IDEzLjk5N2MwIDQuNDE2LTQuNzAxIDcuOTk3LTEwLjUgNy45OTctLjYwMiAwLTEuMTkyLS4wMzktMS43NjYtLjExM2wtNC41MzggNC4wMTdjLS4xNjYuMTQ3LS40MjEuMTMzLS41Ny0uMDMxLS4wOTYtLjEwNi0uMTI3LS4yNTUtLjA4My0uMzlsMS41MTYtNC42NEM4LjAyNiAxOS40MzYgNiAxNi44OTggNiAxMy45OTggNiA5LjU4IDEwLjcwMSA2IDE2LjUgNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NSAtOCkgdHJhbnNsYXRlKDk1IDgpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" width="32px" height="32px" />
                        <span>카카오로 시작하기</span>
                </Button>
            </LoginArea>
        </div>
    );
}
export default LoginForm
const P = styled.div`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const Subtitle = styled.div`
margin-top: 60px;
font-size: 18px;
font-weight: 700;
width: 328px;
margin-left: auto;
margin-right: auto;
`
const LoginArea = styled.div`
text-align: center;
    width: 328px;
    margin-left: auto;
    margin-right: auto;
`

const Button = styled.div`
background-color: #fae100;
color: #3c1e1e;
display: flex;
text-]align: center;

border-radius: 4px;
cursor: pointer;

margin-left: auto;
margin-right: auto;

font-size: 16px;

width: 328px;
height: 48px;

align-items: center;
justify-content: center;

gap: 2px;
`;

