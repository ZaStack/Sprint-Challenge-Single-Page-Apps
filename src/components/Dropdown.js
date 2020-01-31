import React, { useState } from "react";
import { Collapse, Button, Card } from "reactstrap";
import CharacterList from "./CharacterList";

const Dropdown = () => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Closed");
  const onEntering = () => setStatus("Opening...");
  const onEntered = () => setStatus("Opened");
  const onExiting = () => setStatus("Closing...");
  const onExited = () => setStatus("Closed");
  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <h5>Current state: {status}</h5>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CharacterList />
        </Card>
      </Collapse>
    </div>
  );
};

export default Dropdown;
