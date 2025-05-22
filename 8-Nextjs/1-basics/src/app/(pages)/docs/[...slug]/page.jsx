export default async function Doc({ params }) {
  const { slug } = await params;

  return (
    <div>
      <h1>Döküman Detay Sayfası</h1>

      <div className="flex flex-col gap-5 mt-10">
        {slug.map((param) => (
          <span key={param}>{param}</span>
        ))}
      </div>
    </div>
  );
}
