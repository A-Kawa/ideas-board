import React, { useState, useContext } from "react";
import { setProperName } from "../utils/_properNameForSingleComponentMenu";
import { setColor } from "../utils/_setColor";
import { setActiveCategory } from "../utils/_setActive";
import { Context } from "../store/context";
import { Divider, Form, TextArea, Grid, Button, Menu } from "semantic-ui-react";

const categoryColors = ["orange", "green", "yellow"];

export const SingleComponent = props => {
  const context = useContext(Context);
  const [active] = useState(props.props.category);
  console.log(props);
  console.log(props.props.category);
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
              {/*later move to separate file*/}
              {categoryColors.map(color => (
                <Menu.Item
                  key={color}
                  name={setProperName(color)}
                  active={active === setActiveCategory(color)}
                  color={setColor(props.props.category)}
                  onClick={(e, { name }) => {
                    console.log(
                      context.changeCategorySingleElement(
                        setActiveCategory(color),
                        props.props
                      )
                    );
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
