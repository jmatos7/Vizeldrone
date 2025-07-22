export default function Gallery() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Galeria de Vídeos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div key={id} className="aspect-video bg-gray-200 rounded-lg shadow-md"></div>
        ))}
      </div>
    </div>
  )
}