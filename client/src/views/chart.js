import React from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";

const StyledNode = styled.div`
  padding: 15px;
  border-radius: 5px;
  display: inline-block;
  border: 5px solid #ff9900;
`;
const StyledLeaf = styled.div`
  padding: 20px;
  border: 3px solid #33ccff;
  border-radius: 4px;
  color: #00cc44;
  &:hover {
    color: #006600;
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

                <TreeNode label={<StyledNode>NEPALI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>{converted.nepali}</StyledLeaf>} />
                </TreeNode>

                <TreeNode label={<StyledNode>HINDI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>{converted.hindi}</StyledLeaf>} />
                </TreeNode>


                <TreeNode label={<StyledNode>URDU</StyledNode>}>
                    <TreeNode label={<StyledLeaf>{converted.urdu}</StyledLeaf>} />
                </TreeNode>

                <TreeNode label={<StyledNode>BENGALI</StyledNode>} >
                    <TreeNode label={<StyledLeaf>{converted.bengali}</StyledLeaf>} />
                </TreeNode>

                <TreeNode label={<StyledNode>PUNJABI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>{converted.punjabi}</StyledLeaf>} />
                </TreeNode>

                <TreeNode label={<StyledNode>GUJARATI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>{converted.gujarati}</StyledLeaf>} />
                </TreeNode>

                <TreeNode label={<StyledNode>MARATHI</StyledNode>}>
                    <TreeNode label={<StyledLeaf>{converted.marathi}</StyledLeaf>} />
                </TreeNode>
            </TreeNode>

        </Tree>
    );

};

export default Chart;
