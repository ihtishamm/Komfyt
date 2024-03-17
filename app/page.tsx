import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:4000/Product/1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1 className=" p-16 flex justify-center items-center">Komfyt</h1>
      <p className=" text-red-400 ml-16 flex flex-col justify-center items-center">
        Komfyt is Ecommerce Shoe store for selling shoes online.
      </p>
      <div className="flex justify-center items-center flex-col border-red-500">
        <div className=" border-8" key={data.id}>
          <ul key={data.id}>
            <li>{data.title}</li>
            <li>{data.reviews}</li>
            <li>{data.company}</li>
            <li>{data.color}</li>
            <li>{data.category}</li>
            <li>
              <Image
                src={data.img}
                width={500}
                height={500}
                alt="shop images"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
