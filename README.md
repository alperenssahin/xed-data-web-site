#XedData

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


##Structure
You have to respect xed-data development environment structure and dev-rules that are considered at below.

####Concept
XedData uses xed-frameworks and libraries on all of
products. You should include in your project this source code from github or
similar version control system provider.


Web framework provide us **inputs**,**buttons** etc. Learn more [https://github.com]()


**Web framework installation:**
#### `npm install xed-web-frameworks`



####File-Naming and Source Path

- javascript codes and class files location : `/src/classes`
- css files location : `/src/style`
- images and symbols : `/public/img`

Bir js dosyasi yalnizca bir tane class icerebilir, dosya adlandirmasi
`{class-name}.js` seklinde yapilir. Or: `header-content.js`

Js kaynak kodunun icindeki her bir html dugumunun style kodlari js kaynak kod dosyasi
ile ayi adla isimlendirilmis css dosyasinin icerisine yazilimalidir. Or:`header-content.css`

####Code Standard

**JavaScript**

- Her js kaynak kodu kullanilan kutuphanelerin ice aktarilmasi ile baslar
- class isimleri buyuk harf ile baslar, eger class iki kelimeden olusuyorsa ikinci kelime
buyuk harfle bitisik yazilir or: `class HeaderContent extends React.Component`
- html kodu icerisinde kullanilacak degiskenler ya da elementlerin style bilgileri constructure icerisinde react
kutuphanesinde on tanimli state degiskenine atanir atama islemi asagidaki sekilde yapilir
    
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

- html dugumleri indexlenirken submit ve input islemleri haricinde id parametresi kullanilmaz.
her bir html dugumu bulundugu kaynak kodun adini ve gorevini className olarak alir.

        <div className={`class-name` `specification`}>{this.state.element_name.content}</div>
        
- her bir class doyasinin render fonksiyonu container ve inside dugumlerini icermelidir.
**html** kodu bu dugumlerin icine yazilmalidir.
        
        render(){
            return(
                <div className={'class-name container'}>
                    <div className={'class-name inside'}>
                        <div className={'class-name specification'} style={this.state.element_name.style}>{this.state.element_name.content}</div>
                    </div>
                </div>
            );
        }

**Css**

- css doyalri icerisinden elemntlerin stylarini degistirirken html dugumlerine verdigimiz className parametresine gore indexleme yapariz

        .class-name.specification{
            color:red;
        }