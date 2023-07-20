import Footer from "@/Components/Homepage/Footer";
import Navigasi from "@/Components/Homepage/Navigasi"
export default function Homepage() {
    return(
        <div className=" bg-white min-h-screen">
          <Navigasi/>
          <div>
          <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="slide1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-ghost">❮</a> 
      <a href="#slide2" className="btn btn-circle  btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="slide2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle  btn-ghost">❮</a> 
      <a href="#slide3" className="btn btn-circle  btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="slide3.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle  btn-ghost">❮</a> 
      <a href="#slide4" className="btn btn-circle  btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="slide10.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle  btn-ghost">❮</a> 
      <a href="#slide1" className="btn btn-circle  btn-ghost">❯</a>
    </div>
  </div>
</div>
</div>
<div className="flex justify-center items-center mt-1">
           <img className="w-[700px]" src="sepatu.jpg" alt="" />
        </div>

<div className="flex justify-center items-center">
        <div className="card w-96 bg-white text-black shadow-xl ">
  <figure><img src="jual1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-white text-black shadow-xl ml-5">
  <figure><img src="jual2.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

</div>
       
<div>
  <img src="deretan sepatu.jpg" alt="" />
</div>

<Footer/>
</div>
    );
}