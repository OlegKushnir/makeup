import app from '../App.module.css';

const Price = () => {
  return (
    <section className={app.price}>
      <h2 className={app.section__title}>Price</h2>
      <div className={app.wrapper}>
          <table>
            <tr>
              <th>
                <h3>Wedding</h3>
              </th>
            </tr>
            <tr>
              <th>Bridal makeup</th>
              <th>130</th>
            </tr>
            <tr>
              <th>Bridal makeup&hair</th>
              <th>180</th>
            </tr>

            <tr>
              <th>Guest makeup</th>
              <th>90</th>
            </tr>
            <tr>
              <th>Guest makeup & hair</th>
              <th>130</th>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th className={app.option}>Trial muah costs the regular price</th>
            </tr>
            <tr>
              <th className={app.option}>
                * 30% discount for all guests (if all makeups done in the same
                place)
              </th>
            </tr>

            <tr>
              <th>
                <h3>Photoshoots</h3>
              </th>
            </tr>
            <tr>
              <th>Photo makeup&hair</th>
              <th>150</th>
            </tr>
            <tr>
              <th>Every changing much</th>
              <th>30</th>
            </tr>
            <tr>
              <th>One hour of presence</th>
              <th>30</th>
            </tr>
            <tr>
              <th>
                <h3>Party, prom</h3>
              </th>
            </tr>
            <tr>
              <th>Party makeup</th>
              <th>120</th>
            </tr>
            <tr>
              <th>Party makeup&hair</th>
              <th>160</th>
            </tr>
            <tr>
              <th>Traveling in London</th>
              <th>20</th>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th className={app.option}>
                outside of London to be discussed individually
              </th>
            </tr>
          </table>
      </div>
    </section>
  );
};
export default Price;
