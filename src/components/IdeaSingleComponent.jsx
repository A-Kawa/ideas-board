import React, { useState, useContext } from "react";
import { setProperName } from "../utils/_properNameForSingleComponentMenu";
import { setColor } from "../utils/_setColor";
import { setActiveCategory } from "../utils/_setActive";
import { Context } from "../store/context";
import { Divider, Form, TextArea, Grid, Button, Menu } from "semantic-ui-react";

const categoryColors = ["orange", "green", "yellow"];

export const SingleComponent = props => {
  const context = useContext(Context);
  const [active, setActive] = useState(props.props.category);

  return (
    <div className="SingleElement">
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column mobile={8}>
              <input
                type="text"
                value={props.props.title}
                placeholder="Title"
                onChange={e => {
                  context.changeSingleElement(
                    Object.assign(
                      { ...props.props },
                      { title: e.target.value }
                    ),
                    context.myState.indexOf(props.props)
                  );
                }}
              />
            </Grid.Column>
            <Grid.Column mobile={1}>
              <Button
                onClick={() => {
                  context.deleteElement(props.props);
                }}
                color="red"
                icon="minus"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <TextArea
                autoHeight
                value={props.props.description}
                onChange={e => {
                  context.changeSingleElement(
                    Object.assign(
                      { ...props.props },
                      { description: e.target.value }
                    ),
                    context.myState.indexOf(props.props)
                  );
                }}
                placeholder="Description"
              />
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
                    setActive(setActiveCategory(color));

                    context.changeSingleElement(
                      Object.assign(
                        { ...props.props },
                        { category: setActiveCategory(color) }
                      ),
                      context.myState.indexOf(props.props)
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
