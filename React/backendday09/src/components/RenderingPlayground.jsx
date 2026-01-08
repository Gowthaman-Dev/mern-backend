const RenderingPlayground = () => {
  // 🔹 Primitive values
  const name = "Rocky Alone";
  const age = 23;

  // 🔹 Object
  const user = {
    name: "Rocky",
    city: "Chennai",
  };

  // 🔹 Array of strings
  const skills = ["HTML", "CSS", "JS", "React"];

  // 🔹 Array of objects
  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div style={{ padding: "30px" }}>
      {/* Primitive rendering */}
      <h2>Primitive Values</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* Object rendering */}
      <h2>Object Rendering</h2>
      <p>User Name: {user.name}</p>
      <p>City: {user.city}</p>

      {/* Array of strings */}
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* Array of objects */}
      <h2>Products</h2>
      <table border="1" cellPadding="18">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderingPlayground;
