import React, { useState } from "react";
import { Divider, Form, TextArea, Grid, Button, Menu } from "semantic-ui-react";

const categoryColors = ["orange", "green", "yellow"];

export const SingleComponent = props => {
  const [active, setActive] = useState(categoryColors[0]);
  console.log(props);
  return (
    <div className="SingleElement">
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column mobile={8}>
              <input type="text" placeholder="Title" />
            </Grid.Column>
            <Grid.Column mobile={1}>
              <Button color="red" icon="minus" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <TextArea autoHeight placeholder="Description" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Menu>
              {categoryColors.map(color => (
                <Menu.Item
                  key={color}
                  name={color}
                  active={active === color}
                  color={color}
                  onClick={(e, { name }) => {
                    console.log(name);
                    setActive(name);
                  }}
                />
              ))}
            </Menu>
          </Grid.Row>
        </Grid>
        <Divider />
      </Form>
    </div>
  );
};
