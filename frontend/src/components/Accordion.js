import React from 'react'
import '../styles/accordion.css'
const Accordion = () => {
  return (
    <div className="accordion">
  {/* Accordion item 1 */}
  <div className="accordion-item">
    <input type="checkbox" id="item1" />
    <label htmlFor="item1">Accordion Item 1</label>
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        venenatis justo. Ut auctor sapien nec lectus consequat.
      </p>
    </div>
  </div>
  {/* Accordion item 2 */}
  <div className="accordion-item">
    <input type="checkbox" id="item2" />
    <label htmlFor="item2">Accordion Item 2</label>
    <div className="content">
      <p>
        Proin blandit, nulla eu vestibulum condimentum, nulla turpis fermentum
        lacus, et dapibus elit lorem ut felis.
      </p>
    </div>
  </div>
  {/* Accordion item 3 */}
  <div className="accordion-item">
    <input type="checkbox" id="item3" />
    <label htmlFor="item3">Accordion Item 3</label>
    <div className="content">
      <p>
        Nulla facilisi. Duis ac urna eget erat hendrerit commodo sit amet in
        tortor. Nam sit amet tortor at orci cursus viverra.
      </p>
    </div>
  </div>
</div>

  )
}

export default Accordion