import React from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid red;
`;
const StyledLeaf = styled.div`
  padding: 5px;
  display: inline-block;
  border: 2px solid black;
  border-radius: 4px;
  color: black;
  &:hover {
    color: lightgreen;
  }
`;


const Chart = ({ converted }) => {

    return (
        <Tree
            lineWidth={"2px"}
            lineColor={"green"}
            lineBorderRadius={"5px"}
            label={<StyledNode>INDO-ARYAN</StyledNode>}
        >
            <TreeNode>
                <TreeNode label={<StyledNode>WESTERN INDIC</StyledNode>}>
                    <TreeNode label={<StyledLeaf>Punjabi</StyledLeaf>} />
                    <TreeNode label={<StyledLeaf>Gujarati</StyledLeaf>} />
                </TreeNode>
                <TreeNode label={<StyledNode>HINDUSTANI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>Hindi {converted.hindi}</StyledLeaf>} />
                    <TreeNode label={<StyledLeaf>Urdu</StyledLeaf>} />
                </TreeNode>
                <TreeNode label={<StyledNode>PAHARI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>Nepali {converted.nepali}</StyledLeaf>} />
                </TreeNode>
                <TreeNode label={<StyledNode>MAGADHI</StyledNode>} >
                    <TreeNode label={<StyledLeaf>Bengali {converted.bengali}</StyledLeaf>} />
                    <TreeNode label={<StyledLeaf>Maithilli</StyledLeaf>} />
                </TreeNode>
                <TreeNode label={<StyledNode>MAHARASHTRI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>Marathi</StyledLeaf>} />
                </TreeNode>
            </TreeNode>

        </Tree>
    );

};

export default Chart;
