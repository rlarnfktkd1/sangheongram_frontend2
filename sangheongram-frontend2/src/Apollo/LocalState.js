// 기본 값으로 로컬 스토리지에 token이 없다면 로그인이 안된것으로 간주
// 토큰이 있을 경우 isLoggedIn 에 true를 넣어준다.
export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

//logUserIn resolver는 localStorage에 token을 넣어주고, isLoggedIn을 true로 바꿔준다.
//logUserOut resolver는 locaStorage에 token값을 없애주고, 새로고침 후 null을 리턴
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
  }
};
