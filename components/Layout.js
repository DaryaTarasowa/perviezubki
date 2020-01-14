
const layoutStyle = {
  "fontFamily": "sans-serif",
  "minHeight": "100vh",
  "background": "#7f7fd5",
  "background": "-webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5)",
  "background": "linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5)",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center"
};

const Layout = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout;
