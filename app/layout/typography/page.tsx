export default function Page() {
  return (
    <div className="page">
      <h1 className="title">Basic </h1>
      <div className="prose">
        <div className="">
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            voluptatibus sunt. Molestiae veritatis delectus voluptas a optio vel
            animi tenetur similique, ipsa cum unde, impedit suscipit? Placeat
            aliquid voluptatum et.
          </p>
          <ul>
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>item-{i + 1}</li>
            ))}
          </ul>
          <ul>
            <li>
              a
              <ul>
                <li>
                  nested
                  <ul>
                    <li>list</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <hr />
          <pre>
            <code>
              {`
            const eatAss():
              eat();
            `}
            </code>
          </pre>
        </div>
      </div>
      <h1 className="title">Inline</h1>
      <div className="prose">
        <p>
          some regular text, <i>italic text</i>, <strong>bold text</strong>,{" "}
          <code>inline code</code>, <mark>highlighted text</mark>
        </p>
      </div>
    </div>
  );
}
