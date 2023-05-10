import { FC } from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/ui/Tabs'
import SimpleBar from "simplebar-react";
import Code from "@/components/Code";
import {java, python} from "@/helpers/documentation-code";
      
const DocumentationTabs: FC = () => {
  return <Tabs defaultValue={'java'} className={'max-w-2xl w-full'}>
    <TabsList>
      <TabsTrigger value={'java'}>Java</TabsTrigger>
      <TabsTrigger value={'python'}>Python</TabsTrigger>
    </TabsList>
    <TabsContent value={'java'}>
      <SimpleBar>
        <Code language={'javascript'} code={java} animated show />
      </SimpleBar>
    </TabsContent>
    <TabsContent value={'python'}>
      <SimpleBar>
        <Code language={'python'} code={python} animated show />
      </SimpleBar>
    </TabsContent>
  </Tabs>
} 
       
export default DocumentationTabs