async function getData() {
  const res = await fetch("http://localhost:4000/Product");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <h1 className=" p-16 flex justify-center items-center">Komfyt</h1>
      <p className=" text-red-400 ml-16 flex justify-center items-center">
        Komfyt is Ecommerce Shoe store for selling shoes online.{" "}
      </p>
    </main>
  );
}
