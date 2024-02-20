// Header
// - img
// - Nav

// Body
// - Search
// - Restaurant Card

// Footer

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJPJAmkd2OhV1zOoUt6_qW1Mh1uc4qaoWkQ&usqp=CAU"
          alt="logo"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default AppLayout;
