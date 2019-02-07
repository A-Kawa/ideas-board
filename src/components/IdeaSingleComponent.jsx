import React from "react";
import {
  Divider,
  Form,
  TextArea,
  Grid,
  Button,
  Dropdown,
  Menu
} from "semantic-ui-react";

import { categories } from "../const/dataForms";

export const SingleComponent = props => {
  console.log(props);
  return (
    <div className="SingleElement">
      <Form>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column mobile={8}>
              <input type="text" placeholder="Title" />
            </Grid.Column>
            <Grid.Column>
              {/* To delete, placeholder for now...*/}
              <Menu size="small" className="menu">
                <Dropdown item text="Category" className="dropdown">
                  <Dropdown.Menu className="dropdown-menu">
                    {categories.category.map(item => {
                      return (
                        <Dropdown.Item className="dropdown-item" key={item}>
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
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
        </Grid>
        <Divider />
      </Form>
    </div>
  );
};
