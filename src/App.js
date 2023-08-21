import Layout from './components/Layout';
import NewTodoList from './pages/NewTodoList';
import TodoListIndex from './pages/TodoListIndex';
import ShowTodoList from './pages/ShowTodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/new">
            <NewTodoList />
          </Route>
          <Route path="/lists/:id">
            <ShowTodoList />
          </Route>
          <Route path="/">
            <TodoListIndex />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
