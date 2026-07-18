function Rules() {
  return (
    <div>
      <h1>Rules of JSX</h1>
      <ol>
        <li>Multiple elements must be wrapped inside single parent.</li>
        <li>All the tags must be closed properly.</li>
        <li>Attributes like class and for should be replaced with className and htmlFrom.</li>
        <li>Attributes must be written in camelCase.</li>
      </ol>

      <h1>Note: Fragment</h1>
      <p>Fragments helps to render multiple jsx elements without creating a extra node.</p>
      <p>Syntax: {"<React.Fragment></React.Fragment> or <> </>"}</p>
    </div>
  )
}

export default Rules