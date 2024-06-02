import { BrowserRouter } from "react-router-dom";

import { MainRouter } from "./routers";
import AuthorizationProvider from "./providers/AuthorizationProvider";

function App() {
  return (
    <main className="flex-center h-screen flex-col gap-y-5">
      <BrowserRouter>
        <AuthorizationProvider>
          <MainRouter />
        </AuthorizationProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
