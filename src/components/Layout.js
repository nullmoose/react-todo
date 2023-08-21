function Layout(props) {
  return (
    <div>
      <h1 className="layout-header text-4xl font-bold border-b-4 pb-2 mb-2">Todo App</h1>
      <div className="mx-10">{props.children}</div>
    </div>
  );
}

export default Layout;
