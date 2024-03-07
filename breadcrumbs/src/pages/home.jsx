// import {useEffect, useState} from "react";
// import {Link} from "react-router-dom";

// const Home = () => {
//   const [trendingProducts, setTrendingProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
       
//         const slicedTrendingProducts = data.products.slice(0, 6);
//         setTrendingProducts(slicedTrendingProducts);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <span>Trending Products</span>
//       <div className="product-grid">
//         {trendingProducts?.map((product) => (
//           <div key={product.id} className="product-card">
//             <Link to={`/products/${product.id}`}>
//               <img src={product.thumbnail} alt={product.title} />
//               <h3>{product.title}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <Link to="/products">
//         <button style={{width: "100%", padding: 10}}>View All Products</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;










import { Link, useNavigate } from "react-router-dom";
import './home.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login Page</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <Link to="/signup" className="btn btn-link">
                  Sign up
                </Link><br/>
                <Link to="/forgot-password" className="btn btn-link">
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
