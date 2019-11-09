# XedData Web Site

## Available Scripts
In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.


# Structure
You have to respect xed-data development environment structure and dev-rules that are considered at below.

## Concept

### File-Naming and Source Path

Files must be located at below directories:

- javascript codes and class files  : `/src/classes`
- css files  : `/src/style`
- images and symbols : `/public/img`

Jsx scripts can include only one class, files should be named as
`{class-name}.js` 

Ex: `header-content.js`

Style of every html element should be declared in a css file that has the same name with jsx file.

Ex:`header-content.css`

### Code Standard

#### **JavaScript**

- Every jsx code begins with including of other sources.

        import {HeaderContent} from './src/classes/header-content.js'
        
- First letter of a class name should be in uppercase, if the class has two or more words, other words begin with an uppercase letter without space. 

        export class HeaderContent extends React.Component
        
- You should define a 'state' variable (which is predefined in react) with its elements and styles at constructor.   
  
  
        constructor(props){
            super(props);
            this.state = {
            element_name:{
                content:'content',
                style:{
                        color:red,
                    }
                }
            }
        }

- Indexing of html elements doesn't have id attribute if this element doesn't have an attached
 function. You must give the class name as a pair for indexing these elements.
 
 
        <div className={`class-name` `specification`}>{this.state.element_name.content}</div>
        
- Every render function should be given the specified html nodes at below.

        
        render(){
            return(
                <div className={'class-name container'}>
                    <div className={'class-name inside'}>
                        <div className={'class-name specification'} style={this.state.element_name.style}>{this.state.element_name.content}</div>
                    </div>
                </div>
            );
        }

#### **Css**

- You should define styles at css files by using class name pairs.



        .class-name.specification{
            color:red;
        }