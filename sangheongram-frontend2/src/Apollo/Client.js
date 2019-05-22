// 백엔드 서버에 대한 설정을 해주는 것이다
import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  // 해당 App이 오프라인 상태에서 발생하는걸 clientState
  clientState: {
    defaults,
    resolvers
  }
});
