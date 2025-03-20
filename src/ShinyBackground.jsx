function ShinyBackground() {
  return (
    <div className="shiny-background blur-3xl">
      <div className="h-50 w-50 rounded-full bg-shiny-green absolute top-30 right-100"></div>
      <div className="h-40 w-40 rounded-full bg-shiny-green absolute top-50 right-80"></div>
      <div className="h-35 w-80 rounded-full bg-shiny-blue absolute top-80 right-60 rotate-315 translate-x-25 translate-y-[-20px]"></div>
    </div>
  );
}

export default ShinyBackground;