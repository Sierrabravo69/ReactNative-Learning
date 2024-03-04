import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={{padding:10}}>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle} >Hawa Mahal</Text>
                <Text style={styles.cardLabel} >Pink City, Jaipur</Text>
                <Text style={styles.cardDescription} >The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
                <Text style={styles.cardFooter} >12 mins away</Text>
            </View>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUYGBcZGhoaGRkaGRkaGhkaFxcYGhgaGRwdICwjGh0pIBcZJDYkKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHRISHjUpIikyOjIyMjIyNDIyMi8yMzIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EAEIQAAIBAwMCBAMECAMIAQUAAAECEQADIQQSMUFRBRMiYTJxgUKRocEGFCNSYrHR8BXh8TNDY3JzksLDghYkU6Kz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QALxEAAgIBAwMBCAIBBQAAAAAAAAECEQMSITEEE0FRIjJhcYGRofBSsUIUI8HR8f/aAAwDAQACEQMRAD8AF3VdblcZKoBUtJ6WsIR+9bbx2oMNXRcpXArHKg5D71dYoNLmOB9a0S7nkVNwZSORBuyahsVimozk0Rbvg1JqSLxlFlWtVmVovzBFUZZpU2Gl4M0SrqtcbFcV803J2yONb9qxfTUytqDzVzYoa6O0JiJ7RrIpTx9LQVzSEcUVkB2xRctzxWDJFNrluOV+orC4imqQyMnPGmLqrJo02Oxqn6t71dTRknjl4K2rxFF27xNDixFaohouEZCrJOHISGqwNZKTVlk9K5YwvqQu2s81qLY6VjZitywrPkUkzZilFqypQVm6VYuaqbntSqyjaMXSsnStncVg7VogzJlXoUZBVCBXXesyavFoySTOkVVq7Up7RGpNlNvtXK0qV1nUHNaPah2057U7/VweDVH0tZtVGnSmImtGsypp4dLWT6I0yyLyI8cvAnn2qB/amL6M1i2lprixf9xA63D0q/nHqT99WNmqbIpXFFFkkjazfPUmikvUCkVuoHWklBMrDM15DEuz1qwszmhkou05qEo1waYZFLkujEdqMt3x1oUXRULDpU9N8lNdcDNWWq3dPuyCKARzRFq+RxU5Y2uArIcbSzg80Bf8NPSnIvK3IiqOzL/EKVSlEe0+Tz76IiqeSe1ejS8h5EfyqzWEPamWWS5FcYnm/KqeXTy5pFod9IKrDMLPEmhXtrVEowaSrizHFao5U0YJ9O07Bkt1d7dHWl7xRK2lNLOTK4ko7NiF0IrMvFPrmhHNKdTpoqHc8M1KKe6A3uCsXq9y3Q7LTxkJKLONVAahrk1TWyTxpnfNFcLg9aqyg1XyqZTEliNJqVTbUpu6T7KPUCa2S7VttQJTNxfJgi5x4ZqjKeQK0NtaH2V0A1GeJPhmrH1Uo+8jRra9axfSpVxPzrm2elSeOS8mqPUQkC3NEOlDPo6Z+UehqG2etcnJeTm4PwI30lV/VyKeNarNrHtVFkfkR44vgUolahTRx0tQWKLyJixxtAqLRC2J4rTyqulqDialJplla5MvIYcVWT1pjavDgj+lWayD0oamuTm14F6e5JotGMc11tL2qnkkUJJSGjOitxPbNZi2RRis0ZE1DU9I6yA63GHSrLdB6RVnt9RWD+9DQMshqzCqs8dKHLDvXBcA60yjRzyWEh1q4cdKD81fapuH+hq8W14M06fkNa4FyDg/OusyP1zQYaqle1TyY0ymPLXkl/SCl76SmPmkVm18e1SUJI0d1MWvpKwfTU5LqawdQaeMmgNpiZrVV2GmVyzQ72qrGRCSrgFqVp5dSqbE9TPZhagSoTUBoUzHaJsrvl1YGrTXWzkomfl1Nla7q7IoapB0wMdtQMa02iqm2ehrrT5QUmuGV3DqK4zCrbT2qpFLpix1OSICPaoY7Vw2xVTaoaEMsh0Fa6XWsihqsHrRUUHWzc+wB9qlt2HNVQCtlH1rqSFcmzhvGMiqpe3KDHIB+8VTXuEt3G7KT9YxWHhFwvYttz6YPzX0n+VHTEXU0bsx6Vw3DW1UAkfU/gSKOleg2sx8yqnPP31uUFU2HpS0gqYK9gdKwa0RTCKow9qKDYEEHUVcIOk1uVFTYKZOhWkzAmqF63ZKya1TarF00QZrN7NXFurAGlcRlMGa0aHdTTFmrFxXJHOdgRJrNmNFtbrnk01IXuSA49q7Rfl1K6kdrZ6Cuiq7qm+huR2LVYVTeKqbo+fyrqYLRtXaxW5NX30dLDZeKkVUPWd6+REVyg2dqSNs12TQi6lvar2tQftUXjZyyIJ+lcIFVF0dxQfivi9vT2xcuBiu4L6YJkgkcn2pVjbGeRJWw4LVWQUh036VWrm7Yr+ld0EAE5AgZ5z+FMNN4xbuFxBt7TH7QqA3usMZHvQ0NOmjlli1aewb5YrrAKJJAA5JMAfWuowOcEc0g/S64rJasmD5l1NyyA20HkT7wKeELdCyyJKy36Q3Wbbp1EkhSTIiRkD7wDNFfo7oLttCHA2HIgyQ0AP8wSMV4jX+I3FvqqOdsoJIXeJcqdpUBemJBp/qfF7lqyDbZ3JuMkOUiEYhz6VHXijLBJNP1BHPF2vQ9J4jfKLCDdcbCqI+rGcQOaA0GsYvsdHAzDMymCDtjBJHH3mvPeIM287NwAZViZIDbJkj/mOaG02tuC5GIAODu5nb396XRJqylxuj3bJVdtL/ANHr7G2+/kXrgGI9KmB9KZm4K7SxNSM6m2r+aKR+P+MtZdEthSSu4yDxMCI+RrtDCsg4Ke1Va3XlT+k90Z2W47Q0/fu/Knun1j4L7TORAjBIjBaZzQktPI6bYU1uuba1NwVRnFNoYndRXy6qbdXF0dBXDc9jXaJHPIjJkrM263a6OxqpuDtR0SB3EZbKqVrTd7VxjR7bF7iM9tStYqV2hnaygcHgmuqx6E0FodI49TEsD0hv51qUbd6VMdJBAj60dSuhdEuTa1rrZbarAkcjPTn+Va7e0/fXkGuMtwurEEtyDnM9frTLwq429gXgHMk9Qsj7zVJRaVonGSbpj1Qc5+eePnUBHf8AHnp+dD+czQJJwCYOZ55oR7zKDxtkkyJ4qPcZbtpeRuE/H3FX8s/60tta5SGZ3GFEE5ieAPfNU/xm2QBuYDO6VmfwwP601yYtRT3YwZ1UEseO3vxWtsKwkervtIMfP3pV56G2JYFfRPB6mcfWqajW7VhSR6sgAL3H14FKpvhj6FyhtcdLYLXHCqoLMc+lRyxiYFJv0muWrtjaLgEPbM5+0Dt5HWaH1Grd4UN6GUqZAOGlWnGeaF0yQm0+pSyn1kn4VUL06Tj/AFo9yvJ3atU1sCabS27e4EliQABt3T6pnBA6d6KbRJc2AyAh2lNgA3NcKmck8xwa6tsQPSF9lyOh/OttReNxmLA7gRtIMYRmIGGz/kJodyTd2HtRSqvoFnxS4VCyRIUggAGCrMBiOiEfWldiLmrt72uswZOYKiIuYzIBGD86JtaDcikM6mQAdxPA25kno5+72rDwtNmtuqCfTaMGc4s28kwM/wBxVMck7p+COWOmm15FPihJ1VuZndb55xdYCn3iq3W0Y2+YW866DtLAwrnbMdAK894hcc6q2xLFgLGZJI9K9fmT99em8RuufD7u5jm5tlmbI8u3g+3P3mrzXBmxveQN+khdLifEN161kk+oG2oOeomfuoLTj9qfkf8A+n/N/ftxRfiq77eml42LbuGVdvSDEAhTmTxQ8bLzT0ScTwWDDkDoal/jXzNUWnK/kOv0a1ub9szIu3WBkcblAEdKdNdB5n7qR+FacW3uuXJ3lmACtjzCGAk4PHI70eniNvh3IBMYWY9+R/YpbT4OaaDvNRc5A4rzf6WFTeWOlsA/Pc/+VH+Ytx2ALQCIyOtKvGwPMBDT6cmZ6nmuS3GgJ7dvHHQdPn/CP77U/sp67R7Bf/H3/pSS1x/8V7e/avQ6dc2zwAB/49YpMr3Q8VsO3uiY2/yrjXFCkkgDuSMV23pXJnpzgg/dQup0xb0g7R1kydo+X1o6lxZNRlzQWVYdcdOfyFQsY/zNU/VmGSDEEyIkn5YxHv8ASgwQ6hgTuESGEDM9fnQU4vyHS/QKuBj2FZNIJmgfO2XrjlDBUKvPsOh/pR9tN6hhzyRIHWIz9DzTqQko+hmWNQOf7FFonplSOuN0GfmKxe6BO8AnpBknjr99FSFcGim751K0mwOXM9cVKGoOl/A80utvW2KbnWRMXAJjmQDxWT+Ms0hmZjxmBgdYHFOrfg9y8u68bouKrbpRUBnaAFJJJiedopPqP0du27mbZO7G4MWCwADJVfypFkh55OnHIvduiqa+3GbJcnggwfbEZNEpdZlYLYu/xALkRzPp9q38P8Ht2biB/NJRgwuEwkwSFC7NxxJJEfSvQ+Nai3tK23JuBS0KoaQQwEg/CZHHt70k8voUx4217Wws8MA8veti4QsiVbcSRg+n6/5Vlcey1zLPbQCSCoYHbLST0BHt2rSx4fdDbv1s2gxMrtGNwOImkz6l3cJcJO1mIYjBBVAR2IlZ+tTTTbKytRWwXrrC2kJd4AMA7JBEjAAOTBHECazfR7w2y5bZds/EobIMAScnHSh73k3N6XHdGDlW2gEDLfCCRBwOvenl2zoQLf7B9vUhvs/vNDHGCOnWn16a5sm4SndrY8+LiW1QXM8FgP3VInM9c/dTUWEL2jbt/sy6yRuhgwzuLGIzWZ1ujhnsIVKySCwJMcBQ0jPzpm3iiTb2sp4ZiCpg9JgET0+lDJKTVlcMFF0xb4xbi8srBJBwJmWmfnQGnKwnp+0OnGLcDj5fdRPiOtF29bfdMEKSY5VgDwOKCtjC44Yf+r29qaCdBlJXsa21EDaMSensvt2ioCpdup9fQ/xe3zqaYDb9f/FKzY+u4R/xP/Z/F/f8jQtjfSMvlrI+0Psk53246d6WaBo113/pNjA406f07Uz8LzbX2ue3S4g/e/v8KV6YFdbdJBjyX6GDGnAOeOkU3T++18GJ1XuRfxQo8Q1BGoQAxIsz7kBSK9P4qSfD7u6P9rHP/DtnpXltegbVWwMCLM9f3RivVeKW9vh90CT+164/3a9vlWrJ4MOO/aFniTL5duQD/wDbpyVH+9TuwrHVn9q/H+xXt+6nvWvibxatySP2CAZbP7VDgAGcA8UPqX/av/0R3/dWkfH3Lw977Dt7rIHNswxCg7du4iJ6eocdaxS1eu7dqgnjCqM+56nPJrt+3cuBltssnZgsRjbnkxPsB3p8mqXyUNseX6RKiF2t6cQVJmZ4BrLObiti0YKUt+DHwuzcXYTbbpv9DTiOJAB4pd+lOnVLibd0G3MNMj1MOtd1/j9y1ELduA8lZxn/AKYoDXa7z3BXfKrBDKVI68EAxmuhqvUy1wWye/yF9r/xXrPf+I/31NP7IkccL2nos9/5ikotMOZ4jryOYn5ivSPonW0XYgDZjqc7e/8AlRzSWwsYuhedUyztI29h17YIii/DPECXaVEC25zE+lTAJ96V+MadLNtWV7jXGHAKwvUnbtmI6TQ+musVlXUzjJjpPEZpk046jJKUoz0m3h+pZrluSw3Oft3fswR2+7A+dGX/ABTZdZVUEAAtO/JLKD0j7X30vtLse0QdxD3eiyDtHAA9vb61mobc29YITcM5P7W2c+jH86o4RbsCyyUfjY+8RdStozElj6pGNy/cMgVfTKjSWKlRj0lCM8EgHPXrSe/4jcUKvK7J27A0T8UlhMYFD3dVbCBQAhLAkgzIE4j+hpL8cHdzfc9PcVVQn0ZJgDLQOMZ9qW3fGX3RbVQqmJIyfux1NB6/XW2RfKUo4+JmZmBEYCz+da+C3LTPGpCqm0jdu2gnAnHWjGjp5NWyO/4iDyqfQmuUr1IcO3lAeXJ2Y3emcZ25qVb2fX8ke5L0/B6jwrXW0uqxv2iMCd3dhwTqH6An4enbltf8Xdbdp1cBTu3n9nHMrl2nieN30rz+n/QJLID3dQGMEspVRbBA4JYg9cUm8XbS2rm3yxdVSTtF3yVDBgucgHn8K8yrdI9GMpJXJUPH8Rual7fmElFutAKDa6wQuQsEiROYxNFeIfo5bKXLlo3Eu+XgIQqEqMZIjPXNePtMF1KPbtbAq3G2m55gRglwCSsDtzPND3v0p1BAVrnpgqVU5UDIMg8/6ZrnCarS9zu7DTUkM9MdStxdO15gZgjzJUEZzsMAxE55NGa7TmyUuFrbbWG4i5JiMGDcB5kT715Ya/dz1BJmOSecDv8A6mt7esUHJx7DmZ74H412rInb/oRZIKNf8jPUai3cuHaFAd5lpMFjzLEqeT/SnSeA6j4LertQuIuLbUSOQAB0+VeaVLbZ3lW/d+I+0HGfmDXbOvujILgrkEx6sZIM5n8/emWW1a8eqDGSfP8AZ6D/AATxBjPmLngKmnUDEHKsf61kfCrqXxZu6q2Hn/Ztet8bWfKSSBA5ijf0b/SW2baW7zSASZaIkNuHIGVKwKcabw97481brFiDJC2VOBBBItGDDdzxT921wvsFR8pt/U8/+kH6KXjclWUoAxDFgMGG9KjoDI+Ud683btlCPMRlnALKwmB9jdgn2r6C2ve40PdtoiEBSupNssm0QxC/EZQY9PxmlWu0xNvfcC3EViAvnXbjyZAPqJ7E9OK5Zqi439hZ4Ldrk80jTyOnICAkdyDQ9vSal7ZdAxtqWBdVaBE/EwHSetGXL+nRhtslSTG0uyk/CeDJ2+rmIzXrvDtPbKoba+WLhIFsXYVobJ6nMHBgEU2PqVHavuhFib2b49GeT8E1Wxf2gW4N0ybl1RHBHpxTS74vKwNgCo6JaQtHrBUkswORuJ5yRVtf4do7FwrdVgTGBdYhQRiNizn3J56VR7fhhQ7PN3gYK3HUMYgQHmOeTP5UXki5akxqko6Tzd5S11bvEbYXJJ8s9IGfhr0Wq8TF7TtaNtl3PuBJPwxHEAikvhGlfa24MB8SRtYHMMpJ7xWGtLJtYIwBJlZOOeYxRydTraimrRnjDQm/U9RbtoUtpctW7mwKFbM8KZDAzjPp4rQW9IJY2IuREE3CNoHG7zAAMdu1eLteIEnJAgzkGYxHT2H3U3TWWiu54UGYhZAG1hwCCTn8PrU5Sle9orDLF8IK1pt+l7h2rcdVtohYbmiOCG2gQck8tXPG9WyW2ZDtnbiZiSJ5680u13i9i4LATcDZvPdPpywZlKgAsZgKZ/l0rZ/HrNxixRW56sJMcwcH5e1NJ0k6bC8kWmk6+IXpdYtzKg9PtETgE8cVd7xTkY6GR06H+tA6rW6faPIgTllBICHEBQcwY79+KC/W98blwDxuiOkmOcGPyqclJy24DLPCKSu3X0sP8S8aRQBtmJj5mAZ7jHFY2f0qum2yO3xYOBKjPGMD+gpJq9QLkwgWI47Anv7c0EpkEZknEDJNa4dPGUfaMsupnqtM9Lb1yXBLKwb1QVPJH5mtLF5Mn0wp4OBIx/OBXmJbsw6mMY456c80eXa4ALYJJwcEnHExM8HNCWFx2T2/oXu+Wtz0Onv3CJDqVyeSQJ6CAe3NCLrXMtJ2gx8O7/MDHUUJ4I1y4fLAz8J3OUAEHjP41je1Fy3cZWOVaDDZlTAg9R86j2nKTXIXk2XI0dCzSdpHA3gEjuBzHU1iHtbtri0IweIz2MVS5qWMkKDxu2/EJGR/Yqq6kKPSpGIMqN2PmMilSa2C5xuyLqbRuFACF43SQMYEyeK5qbyL6UKmSQZbEfKZ+tCLpWMt8U8jr9080HecyVIzOJwR2Ht0rZCEW9n+TPrfoNv1lxwqx0ipSz9XcdR/3VKbTD4Ha5DzW/pPe1KeXccABgTgAGGBMgAAnEVXRapbbi4iK4HKsqHjuMArnrSe/cd7gUhQ0Z6Aj26V2210q6Ihg9I6RyJMfnxXlOHDTr6m1Tkxz4t4st7fAFtZAVVLYWcKwB68cGk/kuTIAaFywAj0mYkDBNb6bwG5Km5G1hkA5EDAPv0600Tw+2hBg7FnDEzJMj5x7/lSS6iGPZOxnCU92JEfeufQVMERkLOMfWhb9q5ugKWVcyqmAO+MTT/X6VB61WSxgACfi45zHA7D8KE029XAaVUEiJPcEg4E1aHVJx1JfRk3id0xbp9Q+5eRmYg8dcfMVZNbIwfhMx0I6Y9or1VvaRDRMZjjr/P866ulsABfLBGIxOeMn6VN9ZD+Joj0kq2Z5Oxea6Tg/FjoMmB8pyK9R4f4trEseXZIAZmBII3KBGM/ZjsO9E29JaAb0gydx4yRwBHasVv7W221AUY+X9xUZ9WpXpRWPTuPLFz6GCzOz7iZO3YsCIxC9JHPTtW+l8VFnzE9a4O7a1xcsInBEgiMcTTFXR/jA6n+tUGktyzx6m5kz0jj++tRXUJ+9f0C8DXuv7gKsLhPoggDOAYUBRPv6aq5tsImcgSpPJ6Y4469qKTSqJKniJ9wD8I9+fvqPbsyAFCnp278cRPWlc03asTtuhZq/DnaCtxRGBMksABGR/f5537e4NvIkbY2wp9JOPqPnT1bbTtBCrypA5I59zx+NQaAAmApnJkLGPlk0V1NbMEsMv8AFizSPhSIB/c3YJ6fWO9R/EGJI2OV7qQ4jd/DPEGitRpGDzuVRHEGMyOgkfnQj6DYAxd34+EYWBkwViI6dKeLhJ3/ANkZKUU0bapLd0JuXcywsywIAzt54+mBXbuktuSWQZHJyAOg9vl7UHYuqcG6zTIjB4OAecjv/Sh8ibZKhgAQYJJJPIIzB7Hinqb21Pb5i9zy0H3rent7f2YmZWBBnviJGflWDeG6d92xlR+RJ4I+XQ89ayteYQN6MWGDieeZ7d4+VD37bhiQu4GDgcdJMj01fGpXSk7+diymmra2+RQ6C4SRC56lgPl1n8Kvf8PYABGB6lZAIiJwDmrF3DQwgwDGDIPUQSINcV35EySDtwZMd5n2rZ3Jqt0Z9MDi2UXaGAZiMgN3wOOn15FaottWC7fWIkhiAD1XEzM0OdOo2753QAV+FgT1yOOlY3AQ22I/dBmR91Fty/yBel8Dyz4tsJB44g5DKeVKtjv+VLnsyVNsm2d0ZJgbuojgVna0dx22iQTBViPijnH98U10/hG1YNyGIyBtb7uM/fUmtHDLwjLJ44NdP4cNguLqC+1oKrZuHg8lpgKw4Le9Kb/h1sLuS8XkxtFrr9HJ69qZkMgZNwXcCCAvxdF9QIpXprFyxcDWwxHfEHgkU+LLKnX/AKdPEl4NNPrFUwRjruVgxH39hHFS6UuL+zhGE+kkweuCevzxR3iIW6DcO228AkQxeexIOBECluh07sZlCOWCkSImPbMfzqacPfbaYj2WlpNfkxsuRK7oPXEx9ZzRDftCFJtlo+IlUOBiWJ5xR1yyMNctW0U8EM7GenoXEfOpbutbLQlpkAk7Rlxz6d4MsPY0JdTbuK/oK6Z8t7FrF9FUAohI5Pmc/cK5Wq+MWmz5S5/4YP4xmu1DvT/iP2ofyX2Nf8PRBJVbeILYJjrOZihlN0lgq7QpH8Mg5lc5xRNzUu6btirOYOWAyfUpHwmKN0bMVXC8CczkDg9f9KxSyTUXqpmrUpbIR3Ll3Lm4YmApSQSDjg5o0JduAkqQduSRt7dOvemresABtsR0G0EEzNbMssNrg7RBEyRPJOen5VKWf4K/34FYJeRRZYoGPMAkn1AEAdCYgVRdcLlrzCoKhgFIHBBjI6/P2ptc1YVSo9agZ8zk9+1DWtaiSqW1A9R2/ZJPWOD1E+9dGV715/AylFOhJcYs5a2p2j0k8D3k8T8u9bXLty2YHqHAIkx1z7f1ptp9SuxUCIqn7J+H+s1q+qgkQrAAHiRBqjz+NINXzEdnUEkjqJ644zB9q1shztbaxXMt0APbvn+darZTeLgRdzg+oKdoz9tOOoyO1X865v8AVcjpA6jqf8qpKSfur7k+4wPxHVbQI+z9CB2jtWaawkFtw2hZnqZ6AfQ0zOoFw/DLD0k7R6lJ67vlxmtLjKrKjrvmdsgHrzBJik1JKnHcSU23di227sQUJgj4wPSDEkN7ia3COrAMA8GN23oZ/Cf5VTxFSDvtXPLAaHUk+lhiCokQTBkd6I0lnUCGNxeMLuB3YE5pnWm9kvyGOVXTCm1CBRugAcdu0Vmdeo4g/wAvrWHiFliNxEbY4GPVgzGD8/elyakT9eCsg/3mkh08ZK+TU8iixlf1wZC20blBKn3j5TmkN7VMm103lm+yJ2qRnb3JJzP0jpTbS6xSZj4hx8/kJ4zW9q4knyyhY8kH1EiOvXmtGJKDa07EMihka3oUXvCbjOStlU3AMDJENGRGIHXjrRP/ANP3LgUO3GRt+L3XcRgdczz0ovUeZtO1iDMHn2mABI+tTQXTJV5579cTkn8qq5SauL4F/wBPjsU37Vy2SAvwHvLFQIkgcj8aG1GolUbkGQe3Jlc8dKP12tXzmAtKXU93zHEj3H8qsLazvKepstbKyrSDKiftYmTHMdKrBuLTaMc4ttpPYUIysgUiWg7CMmAZ2kdQffvRen0FyBcJ8teheOV49PMH27H6trniDIgKWFBUcKhI2ick88f33Q63WNcfcZJOcer2IJ7cVVTlNuNUviI4KPO45sadnIbUHYBiVwWH2ckQVJgg1unhWnhokk/vNBH/AMhB+lK9N4hc2FHAYzgPzGTzHGcZjiu6M3LnpKiVOSwiPYEcR91Rlikr3pL0exaEoJcWWuI+nkEjafhYNyPmcjpWVhWcF+/HqjjuOT+NMb/h1x0iFww5LZzByBj50OPBtSwlVtkLgw0RjAAYj24qkMmtVFpvyLLUnUeDRHYoNzrJBAU8meMT/nQ92410+XbYoQP2hbAHAAA5mRwKC1GnvhxbuW23k4XbLHjjvTprVxcPG5ekiQY494x99LObx7Orf4Oi5z2a2M3sqq7Llw3FYAEGBEHEDn61ql0KrBAFAECAI46mcRSzxQnzAAfUSBxjJjH3/hTQ2hbm26Av1mRiIiR8/wAajJJRTb5/eB4J7pLgW6HxO6z+W7hkJIbcBt7E/wAJ9xFO28LBADuN3xbQCSBPqIPfr/eFq2FR1byyPUGy0iR3E0S98byxYAtzE5EfD7D5VDLLU1o2Ojqjzub/AOA6f/8AJf8A/wBP61Kvb1wUAALj+JqlR15fV/gfRH0DU0Q3z5NwsRly0NjiFBxz1FX1GicFdli4SOwK/wDdnrPSKsHdF/3bJj1KCVyMwRLDrk/jWSapXiLhVZ/eYZBHEkFSZ61m9tu/H1LaEgPxMm2ksj22YztHq3d4M854mvMW3utclbdyW3AmDLLjdBAEnpX0CzqLiD1oLizkgggCftAmZHv2q5sg7gGYDlRnmJgyMHHvVcXU9tNON/G/1gcL8i+2qNbRntbhg7XJBBHfgd+au5CvuCLMHiN0ECcR8xFZXNalttlzcrGCVYGG+U4I+RrZPIuQ8wR15Bj+GYnNSdrdp0yyjfHJh4qqPbDKolWyBxngGOs/zpMS42Iijc6l2acKAfhk+3TkV6oJbIiQQYPGD84rO9oA3qtsFJ+MQRMdqfDk0qmh5YJM8Y+t27YPttg4HEAEf3NaW7dxlV+MznGJ4z1gU71Oks2CHdi7EycGBM8xk9OorTU+JO0G1dUtzsIACjIOB/Oa1d3+EfqyPa0Xb3Eelt3GuQrEEmI9pP8AXk0U2n8u6ssYCsRIV8ggANwYP5U2tXFjdcALYMgcT2JMx/StE0tt06kxJMQfUDO0nqMfdXKeq7FWC+RF4vfXywwcEgruUAgMOmTl4MDNYHx1htO0rPpkjGDiCegpnf8ADbKIWdCwXIUn1RiTx6uelDX/ABC2ABbsqFIkg7Ce/B6U0dNadLZmnHTJ26CP8fiA+YWWJwCTgwev5+9LRr7TsQqAJk7oAIk44xitLPiSmENpGz8Plrg+3T60T+r25Ja3bjPp8sT78RBrkow8NfU5apcMFdbdwjYrq234xuMAHgyYBIqaLTBl223JZgSWgMOTO4CCAc/IgfX0A1SAAbQIg4biegAiuPq1VZtqJIwWUAA8jJ+I/Kkj1Eq0pP6le0lu2Kk0V9Wm5lYG0WyWELng5gCOlTU3lyqMoM++4+3GDxS3Ta0tfLvO5mJbJ6RIIx7D2p/d8Ps3GU2xtOSIB2spJ+ITk+/86pkm4NKXleFsHHck1H8idkadwOeGKgS0DieavY37hk5OOgBHEk8HE/WmzeFKZLssDM7RIAOB6YHBHJrqBxm0yMP3TuV47qT8XI5++p9/05FeNwftHNMly2ALgXacnKiY7kfSgBq7SlgqBW6qpIJ7fWmLtdbO1Zj1BiWk8RjqcfKk2u07zu8gKOGCxOCY95MiPpT96WZ+0/tX5DN/xCEvgEkW0kxMAEkY5zPatnKEyAf+QYEk5M94rC3eZABsmMdiMTMAmIz91ELp2AIbcAwBwCxGMZEgHpUpbOwabF+pdgxjAUxloMfvFSfpNGWPEEVSd+2MmDMk45GDxVLmkuXm2rgATvIORgQViDXdL4fsTcwUFpyJIwekiIrRBKk7p/A6GKbe3HqFf4hvtkK2NpycZA57z0rml0j3k/ZwWHxO7RmMT1OKN0dtbaEG2M5hgGGeoxgf0q913A9KbVnJUAL9w71HNlk90t/U2YsKXvF/DbIsAhgvmcs3MkcQeke1JPEPFjcdgo5IyYzGMYxxTC9aZhIeEHJP2fr1oa54PbuKCkozHqQR78AflUcSWpym9xs0npUY7IWIGPESOeSpE9e1aLpyQokAnJ6RnrAnj58iu67SHShXcMwJhSJClvcxkxmPaiP1J22tevbhOFGQD1BNaG0ld7HnOdPTRras4EOhHT0t/SpW3nRgbSBxn/OpWb2im4Rob9y4JAgqYfcZDRg7Y+FsgzXD4Paukul24WJnIgDAkkCJmPnmpUqeSTxuWkqvAqXW3LF0qUGPSSGMsBBOZHbHzp1otQ13aVULaJMNCjbAmYHqPT7q7Uq2aMe3qrfYEOQjxDQpcUecS4+yV9DKCQCNxnBIjAmKHXwrTE+jzFj0su4MJMfvDmOtSpWOOSahdmmKVnb3hjKPQ+DOCMgAd+J96mn2Yw2/bzOOYgjI9uOtSpWnDJyjuWS3Rj5VtmujeSBCQQ0jdkZ45kDtFBtoEUgOpPJADEKJk4zM5HNSpVHJp7fuwk4p8/u5sdMhQkEqIBaJk7uAO2D+Fc0hyZkknIgACACBzwPyqVKtHgWkHsoZJKhhtIE8GQDx/fNeZseHNaum7cIjICiTk8g9D/KpUoxk1dGbqoq0ei8N1RZRCqFM5EiCPhgRjisb+pHDpuPcnAJEyB2+dcqVGa3GS9hAVnU3Lo224CqWHwrEKATExHPalupe4RtusCBkbVGIMRJIIz8+K5UrRiilOjJkboCYAkgckfEY5xMgDrEU78AvwChyYOMYI5ExxkY4xXalaepitBPp5PWgmw9sjHxDJHqkcSs4kdea2urtRiFMhSZxyBxz1+tSpXmTXtGnNNtAul1hKLILDCziZiTEn60VodeGDb5Q27gQH4vSwETB7nkZialSqPHGnt+2Sh7qO6uzuRrqkgqNxGIYYBgHjvS3w7X3FcS8CCe8bsg8fMVypQwLVB2Vi9h5pNPvcu9913x6UWAADkDtmc/KifEQunZVEsfshuPYzJI+KKlSpuTdI2Qb0Hb3mmFdTkxhlHqGec4iOnWouiQqdrlyeA0jA+mIhv8At96lSsyySSKKTMPDNLcQlSisCdx3EHO3twRuBP0H1Q37d3YWmCrGFEAD1Lknrg/f7VKlasUnrZhzN0OfA/D9RG69G1h8DbXDxIUus7VIYAgiTn50Fa1UQRtHxEqq+nDThj6hhf8ASTUqUkJa5SteScFug5Ltm4N5sj1ZxAH0HSpUqU3b+LNWlH//2Q=='
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle} >Bangalore</Text>
                <Text style={styles.cardLabel} >Garden City</Text>
                <Text style={styles.cardDescription} >Bengaluru, is the capital of the Indian state of Karnataka. It's located in southern India on the Deccan Plateau and has a population of over 10 million.</Text>
                <Text style={styles.cardFooter} >3 hours away</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
      },
      card:{
        width:"100%",
        flexWrap:'wrap',
        borderRadius:8,
        marginVertical:12,
        paddingBottom:5
        // marginHorizontal:16

      },
      cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
      },
      cardImage:{
        height:180,
        width:'100%',
        marginBottom:8,
        borderRadius:8
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
      },
      cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
      },
      cardLabel:{
        color:'#000000',
        fontSize:14
      },
      cardDescription:{
        color:'#242B2E',
        fontSize:12
      },
      cardFooter:{
        color:'#000000'
      }
    
})