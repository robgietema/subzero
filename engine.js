iMode=0;	
iLevel=1;
iState=0;			
iFps=0;
iLastFps=0;
iUpdateCount=0;
fColDist=1.6;
iScreenWidth=640;
iScreenHeight=480;
iSpeed=0.5;
iZoom=iScreenWidth/2;
aEnemyTypes=[];
aWeaponTypes=[];
aiWeapons=[];
aiBullits=[];
aiTextures=[];
aiSprites=[];
aiCritters=[];
aiItems=[];
aiCounter=[];
gGame=new Game();
eEnvironment=new Environment();
aKeys=[];			
vPosition=[];		
vPosition.x=25;
vPosition.y=1.5;
vPosition.z=-75;
vPosition.r=0;
fBobAngle=0;
fPiOver180=0.0174532925;
alLevel=[];
alLevel['h1']="(W((F)A(()T)A((*1((F)A((*1)_((*1((F*=((*1*[((*1)(F)_((*1*=((*1IXF(F(f(()_IHF(F+O(():HHF(F*E((((H(F(F(((()IIXF(F(f(()).(F(/(((M(-(((].(F(:(((D(/(((M.(F(O(((D(:(((D.(F(c(((D(O(((D.(F)7(((D(c(((D.(F)L(((D)7(((D.(F)a(((D)L(((D.(F*6(((D)a(((D.(F*J(((D*6(((D.(F*`(((D*J(((D.(F+0(((R*_(((D.(F+0(((f+0(((R.(F+0(():+0(((f.(F+0(()L+0(():.(F+0(()a+0(()L.(F+/((*4+0(()a.(F+.((*E+/((*4.(F*\\((*E+/((*E.(F*F((*E*[((*E.(F*3((*E*F((*E.(F)`((*E*3((*E.(F)M((*E)`((*E.(F):((*E)M((*E.(F(g((*E):((*E.(F(T((*E(g((*E.(F(A((*E(T((*E.(F(-((*E(A((*E.(F(-((*2(-((*E.(F(-(()^(-((*2.(F(-(((](-(()0*(F)@(()8)@(()T((F)@(((\\)@(()8((F)^(((\\)@(((\\)(F*=(((\\)^(((\\((F*\\(((\\*=(((\\((F*\\(()7*[(((\\)(F*\\(()S*[(()7((F*[((*1*[(()S";
alLevel['h2']="(9JHF(F)C((((H(F(F)`((*E+(F(((()D()((**+(F(J(()D(((()D-(F(J(((b(J(()D+(F(((((b(J(((b+(F(((((B(((((b+(F(H(((B(((((B,(F(g(((B(H(((B+(F)J(((B(g(((B+(F)b(((Z)J(((B,(F)b(()6)b(((Z,(F)b(()S)b(()6+(F)I((**)b(()S+(F(f((**)I((**,(F(G((**(f((**+(F()((**(G((**";
alLevel['h3']="(L*(Y),((*,)/((*I((Y)*(()O),((*,((Y)M(()O)*(()OJXF(F(((((CJXF(F(O(((6JXF(F(<(((XH(F(F(c(();HHF(F,K(():I(F(F*P((*A*(F)M(((e)M(()O)(Y),(((e)M(((e((Y)+(((H),(((e*(Y)+((())+(((H((Y)K((())+((())(Y*+((())K((()((Y*+(((E*+((())(F*O(((E*+(((E*(F+3(((E*O(((E((Y+3((((+3(((E)(Y+W((((+3((((((Y,7((((+W(((()(Y,7(((D,7((((((Y,7(((c,7(((D*(Y+V(((c,7(((c((F+V(()K+V(((c*(Y,5(()K+V(()K)(Z,5((*,,5(()K((Y,5((*K,5((*,)(Y+V((*K,5((*K((Y+3((*K+V((*K)(F+3((*-+3((*K)(F*P((*-+3((*-*(F*.((*-*P((*-)(Y*.((*I*.((*-((Y)M((*I*.((*I)(Y)/((*I)M((*I";
alLevel['h4']="(QHHF(F)\\((((I(F(F)`((*_H(F(F,g(((EIXF(F,3(((YIXF(F,3(()gIXF(F(Q(()gIXF(F(Q(((Y/(F(((()+(((()T/(F+S((*B,4((*=/(F,4((*=,Q((*,/(F,Q((*,,_(()R/(F,_(()R,_(()5/(F,_(()5,N(((Y/(F,N(((Y,3(((G/(F,3(((G+S(((=/(F),(((=(O(((B/(F(P(((B(6(((Q/(F(7(((Q(((()+/(F(((()T(6((*//(F(7((*/(R((*C/(F(S((*C).((*B,(F).(()c).((*B+(F(R(()N)-(()c-(F(R(()0(Q(()N+(F),((([(Q(()0,(F),(((=)+((([,(F)M(((=)+(((=+(F*/(((=)M(((=,(F*N(((=*/(((=+(F+0(((=*N(((=,(F+S(((=+0(((=,(F+S(((]+S(((=+(F,,(()3+S(((]-(F,,(()P,,(()3+(F+T(()g,,(()P,(F+S((*B+T(()g,(S+1((*B+S((*B+(g*P((*B+1((*B,)?*.((*B*P((*B+)+)M((*B*.((*B,(V)/((*B)M((*B";
alLevel['h5']="(L)(F(F()*3(G()*S((F([())`(G()*3*(F([())F(\\())`((F(E())5(\\())F)(F(E()([(F())5((F(f()(@(F()([)(F)L()(@(f()(@((F)]()(X)L()(@((F*.()(@)]()(X)(F*N()(@*.()(@((F*c()(V*N()(@)(F*c())1*c()(V((F*N())E*c())1*(F*N())a*N())E((F*c()*4*N())a)(F*c()*Q*c()*4((F*O()*g*c()*Q)(F*.()*f*O()*g((F)^()*Q*.()*f((F)M()*g)^()*PHHF(F+4(()SIHF(F(((()SIXF(F)]((*gIXF(F)](((>/(F):(((((f()(@/(F)^(((():()((/(F*=(((()^()((/(F*N(((@*=()((/(F*=((+;*O()*g/(F)^((+;*=()+;/(F)<((+;)^()+;/(F(d((+()<()+;H(F(F+]()(2I(F(F(M()+?)(F(d()*g)M()*g((F(F()*S(d()*g";
alLevel['h6']="(X+(F)6((*()8((*V+(F(D((*()6((*(JHF(F)e((((KHF(F(((()JI(F(F+Z(()JH(F(F)g((++JXF(F(e((*@IXF(F+)((*@JXF(F+)(((SIXF(F(`(((S.(F(D(((I(D(((f.(F(Y(((8(D(((I.(F)6(((8(Y(((8.(F+4(((;*S(((8.(F+C(((S+4(((;.(F+C(((f+C(((S.(F+D((*G+C((**.(F+.((*W+D((*G.(F*S((*X+.((*W.(F(Z((*W)8((*V.(F(D((*D(Z((*W.(F(D((*((D((*D,(F(D(()X(D((*(+(F)6(()X(D(()X-(F)6(()9)6(()X+(F(D(():)6(()9,(F(D(((f(D(()9+(F)6(((f(D(((f+(F)6(((8)6(((f,(F)V(((8)6(((8+(F)V(((f)U(((8-(F*9(((f)U(((f+(F*9(((8*9(((f,(F*S(((8*9(((8+(F*S(((f*S(((8+(F+C(((f*S(((f,(F+C(();+C(((f+(F*S(();+C(();-(F*S(()W*S(();+(F+C(()W*S(()W,(F+C((**+C(()W+(F*S((**+C((**+(F*S((*X*S((**,(F*;((*X*S((*X+(F*;((***;((*X-(F)X((***;((**+(F)W((*V)W((**,(F)8((*V)V((*V";
alLevel['l1']="(,J(F(F*D(()eH(F(F,F((((H(F(F((((((LHF(F*>(((*";
alLevel['l2']="(.H(F(F*>((+)H(F(F)6((((H(F(F+A((((I(F(F,F(()8I(F(F(((()8LHF(F*>(();";
alLevel['l3']="(.J(F(F*=((((I(F(F)4((*gI(F(F+A((++H(F(F,F(()FH(F(F(((()FLHF(F*>(()I";
alLevel['l4']="(/J(F(F+H((((J(F(F)/((((H(F(F)4((*gI(F(F+A((++H(F(F,F(()FI(F(F(((()FLHF(F*>(()I";
alLevel['i1']="(<IHF(F(((((cHHF(F)0((((JXF(F*5(((HJXF(F*5(()DI(F(F(Z((*,H(F(F)P((*,J(F(F)b(((c,(F(@(((c(C(()S,(F(@(((8(?(((c+(F(_(((8(?(((8,(F)B(((8(^(((8+(F)_(((8)B(((8,(F)_(((V)_(((8+(F)A(((V)_(((V-(F)A(()7)A(((W+(F)_(()7)A(()7,(F)`(()S)_(()7+(F)A(()S)`(()S,(F(b(()S)A(()S+(F(D(()S(b(()S";
alLevel['i2']="(;IXF(F*0(()GIXF(F*0(((=HHF(F)D((((JHF(F*@(((aH(F(F)G(()^J(F(F(((((c/(F)6(((=(X(((=/(F(X(((=(?(((S/(F(?(((S(?(()1/(F(?(()1(Z(()G/(F(Z(()G)6(()G((F(Z(()0)6(()G((F(Z(((S(Z(()0((F)6(((=(Z(((S((F)Z(((=)6(((=((F*/(((S)Y(((=((F*/(()2*/(((S((F)U(()G*/(()2((F)6(()G)T(()G";
alLevel['i3']="(,J(F(F*,((((HHF(F)((((JI(F(F((((()H(F(F),(()F";
alLevel['i4']="(-H(F(F*,((((IHF(F)((((JJ(F(F((((()I(F(F(((()FJ(F(F*2(()F";
aoObjects=[];
iNrOfObjects=0;
function Environment(){
var t=this;
t.aPanoramas=[];
t.aFlares=[];
t.iPanoramaLeft=-1;
t.eSun=0;
t.movePanorama=function(iIndex){
var iOffsetLeft=Math.floor(vPosition.r/(Math.PI*2)*1920)+t.aPanoramas[iIndex].iOffsetLeft;
iOffsetLeft %=640;
iOffsetLeft-=640;
if(t.aPanoramas[iIndex].iDrawnLeft!=iOffsetLeft){
t.aPanoramas[iIndex].eDiv.style.left=iOffsetLeft;
t.aPanoramas[iIndex].iDrawnLeft=iOffsetLeft;
}
}
t.draw=function(){
t.movePanorama(0);
if(iMode==1){
t.movePanorama(1);
}
var iOffsetLeft=(vPosition.r/(Math.PI*2)*1920)+305;
iOffsetLeft %=1920;
iOffsetLeft-=1920;
if(t.iPanoramaLeft!=iOffsetLeft){
t.eSun.style.left=iOffsetLeft+iScreenWidth-32;
if(iMode==1){
fPercentage=(iOffsetLeft+iScreenWidth-iScreenWidth/2+32)/iScreenWidth;
iStart=iOffsetLeft+iScreenWidth;
iDiff=(iOffsetLeft+iScreenWidth/2)*-1;
for(iCount=0; iCount < 12; iCount++){
t.aFlares[iCount].eImage.style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity='+t.aFlares[iCount].iOpacity*(1-(2*Math.abs(fPercentage)))+')progid:DXImageTransform.Microsoft.Blur(pixelradius='+t.aFlares[iCount].iBlur+');';
t.aFlares[iCount].eImage.style.left=iStart+(iCount+1)/12*iDiff*2-t.aFlares[iCount].fWidth/2;
}
}
t.iPanoramaLeft=iOffsetLeft;
}
};
t.addPanorama=function(iIndex){
t.aPanoramas[iIndex]=[];
t.aPanoramas[iIndex].iDrawnLeft=0;
t.aPanoramas[iIndex].iOffsetLeft=0;
t.aPanoramas[iIndex].eDiv=document.createElement('div');
document.body.appendChild(t.aPanoramas[iIndex].eDiv);
iZ=iIndex==0?1:-103;
if(iIndex==0){
t.aPanoramas[iIndex].eDiv.outerHTML="<div id=\"panorama"+iIndex+"\" style=\"z-index:"+iZ+";position: absolute;top:0px;left:0px;width:1920;height:225;\"><nobr><img src=\"p.gif\" width=\"640\" height=\"225\"/><img src=\"p.gif\" width=\"640\" height=\"225\"/></nobr></div>";
}else{
t.aPanoramas[iIndex].eDiv.outerHTML="<div id=\"panorama"+iIndex+"\" style=\"z-index:"+iZ+";position: absolute;top:200px;left:0px;width:1920;height:280;\"><nobr><img src=\"p.gif\" width=\"640\" height=\"280\"/><img src=\"p.gif\" width=\"640\" height=\"280\"/></nobr></div>";
}
t.aPanoramas[iIndex].eDiv=document.getElementById('panorama'+iIndex);
if(iIndex==1){
t.aPanoramas[iIndex].eDiv.style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
}
t.init=function(){
t.addPanorama(0);
t.addPanorama(1);
t.eSun=AddImage('f.gif', 1);
t.eSun.style.top=80;
for(var iCount=0; iCount < 12; iCount++){
t.aFlares[iCount]=[];
t.aFlares[iCount].eImage=AddImage('f'+iCount+'.gif', 1000);
}
t.aFlares[0].fWidth=60;
t.aFlares[1].fWidth=26;
t.aFlares[2].fWidth=92;
t.aFlares[3].fWidth=44;
t.aFlares[4].fWidth=30;
t.aFlares[5].fWidth=10;
t.aFlares[6].fWidth=14;
t.aFlares[7].fWidth=64;
t.aFlares[8].fWidth=112;
t.aFlares[9].fWidth=44;
t.aFlares[10].fWidth=160;
t.aFlares[11].fWidth=320;
t.aFlares[0].iBlur=8;
t.aFlares[1].iBlur=2;
t.aFlares[2].iBlur=2;
t.aFlares[3].iBlur=2;
t.aFlares[4].iBlur=2;
t.aFlares[5].iBlur=2;
t.aFlares[6].iBlur=2;
t.aFlares[7].iBlur=2;
t.aFlares[8].iBlur=2;
t.aFlares[9].iBlur=3;
t.aFlares[10].iBlur=3;
t.aFlares[11].iBlur=8;
t.aFlares[0].iOpacity=40;
t.aFlares[1].iOpacity=80;
t.aFlares[2].iOpacity=40;
t.aFlares[3].iOpacity=40;
t.aFlares[4].iOpacity=40;
t.aFlares[5].iOpacity=80;
t.aFlares[6].iOpacity=80;
t.aFlares[7].iOpacity=40;
t.aFlares[8].iOpacity=40;
t.aFlares[9].iOpacity=80;
t.aFlares[10].iOpacity=40;
t.aFlares[11].iOpacity=40;
for(var iCount=0; iCount < 12; iCount++){
t.aFlares[iCount].eImage.style.top=120+iCount*20-t.aFlares[iCount].fWidth/2;
t.aFlares[iCount].eImage.width=t.aFlares[iCount].fWidth;
t.aFlares[iCount].eImage.height=t.aFlares[iCount].fWidth;
}
t.eIce=document.createElement('div');
document.body.appendChild(t.eIce);
t.eIce.outerHTML="<div id=\"ice\" style=\"z-index:-1;position: absolute;top:200px;left:0px;width:"+iScreenWidth+";height:280px;\"></div>";
t.eIce=document.getElementById('ice');
};
}
function Object(){
var t=this;
t.fHeight=3;
t.iDrawnZ=-1;
t.iDrawnLeft=-1;
t.eImages=[];
t.avVerts=[];
t.avVerts[0]=new Vertex();
t.avVerts[1]=new Vertex();
t.avVerts[2]=new Vertex();
t.avVerts[3]=new Vertex();
t.setVisible=function(bDisplay){
if(t.bVisible!=bDisplay){
t.bVisible=bDisplay;
bDisplay=bDisplay?'':'none';
switch(t.iType){
case 0:
t.eImages[0].style.display=bDisplay;
t.eImages[1].style.display=bDisplay;
t.eImages[2].style.display=bDisplay;
if(iMode==1){
t.eImages[3].style.display=bDisplay;
t.eImages[4].style.display=bDisplay;
t.eImages[5].style.display=bDisplay;
}
break;
case 1:
t.eImages[0].style.display=bDisplay;
if((iMode==1)&&(t.iSubType!=2)){
t.eImages[1].style.display=bDisplay;
}
break;
}
}
};
t.setZ=function(fZ){
if(t.iDrawnZ!=fZ && t.iType!=2){
if(t.iType==0){
t.eImages[0].style.zIndex=fZ;
t.eImages[1].style.zIndex=fZ;
t.eImages[2].style.zIndex=fZ;
if(iMode==1){
t.eImages[3].style.zIndex=fZ-100;
t.eImages[4].style.zIndex=fZ-100;
t.eImages[5].style.zIndex=fZ-100;
}
}else{
t.eImages[0].style.zIndex=fZ;
if((iMode==1)&&(t.iSubType!=2)){
t.eImages[1].style.zIndex=fZ-100;
}
}
t.iDrawnZ=fZ;
}
};
t.draw=function(){
if(t.iType==0){
fHeight1=Math.abs(t.avVerts[1].fY2d-t.avVerts[0].fY2d);
fHeight2=Math.abs(t.avVerts[3].fY2d-t.avVerts[2].fY2d);
var bLeft=0;
if(((t.avVerts[0].fX2d < t.avVerts[2].fX2d)&&(fHeight1 > fHeight2))||
((t.avVerts[2].fX2d < t.avVerts[0].fX2d)&&(fHeight2 > fHeight1))){
bLeft=1;
}
var fWidth=Math.abs(t.avVerts[0].fX2d-t.avVerts[2].fX2d);
var iMinHeight=Math.min(fHeight1,fHeight2);
var iMaxHeight=Math.max(fHeight1,fHeight2);
var x=iZoom+Math.min(t.avVerts[1].fX2d, t.avVerts[3].fX2d);
var y=iScreenHeight/2-Math.max(t.avVerts[1].fY2d, t.avVerts[3].fY2d);
var fHeightTop=Math.abs(t.avVerts[1].fY2d-t.avVerts[3].fY2d);
var fHeightBottom=iMaxHeight-iMinHeight-fHeightTop;
if((t.iDrawnLeft==bLeft)&&(InRange(t.iDrawnWidth,fWidth,1))&&(InRange(t.iDrawnMinHeight,iMinHeight,1))&&(InRange(t.iDrawnMaxHeight,iMaxHeight,1))&&(InRange(t.iDrawnX,x,1))&&(InRange(t.iDrawnY,y,1))){
return 0;
}else{
t.eImages[0].width=fWidth+1;
t.eImages[0].height=iMinHeight+2;
t.eImages[0].style.top=y+fHeightTop;
t.eImages[0].style.left=x;
if(t.iDrawnLeft!=bLeft){
t.eImages[1].src=aiTextures[t.iTexture][1+bLeft].src;
}
t.eImages[1].width=fWidth+1;
t.eImages[1].height=fHeightTop+1;
t.eImages[1].style.top=y;
t.eImages[1].style.left=x;
if(t.iDrawnLeft!=bLeft){
t.eImages[2].src=aiTextures[t.iTexture][3+bLeft].src;
}
t.eImages[2].width=fWidth+1;
t.eImages[2].height=fHeightBottom;
t.eImages[2].style.top=y+iMinHeight+fHeightTop+1;
t.eImages[2].style.left=x;
if(iMode==1){
t.eImages[3].width=fWidth+1;
t.eImages[3].height=iMinHeight-fHeightBottom+1;
t.eImages[3].style.top=y+iMaxHeight;
t.eImages[3].style.left=x;
if(t.iDrawnLeft!=bLeft){
t.eImages[4].src=aiTextures[t.iTexture][1+(1-bLeft)].src;
}
t.eImages[4].width=fWidth+1;
t.eImages[4].height=fHeightBottom;
t.eImages[4].style.top=y+iMinHeight+fHeightTop+1;
t.eImages[4].style.left=x;
if(t.iDrawnLeft!=bLeft){
t.eImages[5].src=aiTextures[t.iTexture][3+bLeft].src;
}
t.eImages[5].width=fWidth+1;
t.eImages[5].height=iMaxHeight-(iMinHeight-fHeightBottom);
t.eImages[5].style.top=y+iMaxHeight+iMinHeight-fHeightBottom;
t.eImages[5].style.left=x;
t.iDrawnLeft=bLeft;
t.iDrawnWidth=fWidth;
t.iDrawnMinHeight=iMinHeight;
t.iDrawnMaxHeight=iMaxHeight;
t.iDrawnX=x;
t.iDrawnY=y;
}
return 1;
}
}else{
var x=iZoom+t.avVerts[0].fX2d;
var y=iScreenHeight/2-t.avVerts[0].fY2d;
var h=t.fHeight/t.avVerts[0].fRotateZ*iZoom;
var w=t.fWidth/t.avVerts[0].fRotateZ*iZoom;
t.eImages[0].width=w;
t.eImages[0].height=h;
t.eImages[0].style.top=y-h;
t.eImages[0].style.left=x-(w/2);
if((t.iType==1)&&(iMode==1)&&(t.iSubType!=2)){
t.eImages[1].width=w;
t.eImages[1].height=h;
t.eImages[1].style.top=y;
t.eImages[1].style.left=x-(w/2);
}
}
};
t.checkCollision=function(fX, fZ){
if(t.iType==0){
var fDistance1=(vPosition.x*t.fNormalX+vPosition.z*t.fNormalZ)-(t.fNormalX*t.avVerts[0].fX+t.fNormalZ*t.avVerts[0].fZ);
var fDistance2=((vPosition.x-fX)*t.fNormalX+(vPosition.z+fZ)*t.fNormalZ)-(t.fNormalX*t.avVerts[0].fX+t.fNormalZ*t.avVerts[0].fZ);
var fCollisionX=fX*fDistance1/(fDistance1-fDistance2);
var fCollisionZ=fZ*fDistance1/(fDistance1-fDistance2);
if((fDistance2 < fColDist)&&(fDistance1 >=fColDist)){
if((fCollisionX >=Math.min(t.avVerts[0].fRotateX, t.avVerts[2].fRotateX))&&
(fCollisionX <=Math.max(t.avVerts[0].fRotateX, t.avVerts[2].fRotateX))&&
(fCollisionZ >=Math.min(t.avVerts[0].fRotateZ, t.avVerts[2].fRotateZ))&&
(fCollisionZ <=Math.max(t.avVerts[0].fRotateZ, t.avVerts[2].fRotateZ))){
return 1;
}else{
return 0;
}
}else{
if(fDistance1 < fColDist && fDistance2 < fColDist && fDistance2 < fDistance1){
return 0;
}else{
return 1;
}
}
}else{
if((t.fDistance < fColDist)&&(t.iSubType==1)){
PlaySound('si');
switch(t.iTexture){
case 0:	
gGame.aWeapons[1].iAmmo+=100;
gGame.aWeapons[2].iAmmo+=200;
break;
case 1:	
gGame.iLife+=25;
if(gGame.iLife > 200){
gGame.iLife=200;
}
break;
case 2:	
gGame.iArmor+=25;
if(gGame.iArmor > 200){
gGame.iArmor=200;
}
break;
case 3:	
if(gGame.aWeapons[2].bAvailable==0){
gGame.aWeapons[2].bAvailable=1;
gGame.setWeapon(2);
if(gGame.aWeapons[2].iAmmo < 200){
gGame.aWeapons[2].iAmmo=200;
}
}
break;
case 4:	
iState=1;
if(iLevel==4){
document.getElementById('title').innerHTML='You did it!';
document.getElementById('text').innerHTML='Thanks for playing SubZero.<br/><br/>See you next year with yet another JavaScript game.<br/><br/>Don\'t forget to vote!';
document.getElementById('message').style.display='';
}else{
document.getElementById('title').innerHTML='Level '+(iLevel+1);
document.getElementById('text').innerHTML='Loading next level please wait...';
document.getElementById('message').style.display='';
window.setTimeout("SwitchLevel()", 3000);
}
break;
}
return-1;
}else if((t.fDistance < fColDist)&&(t.iSubType==2)&&(t.iTexture!=0)){
return 0;
}else{
return 1;
}
}
};
t.remove=function(){
switch(t.iType){
case 0:
t.eImages[0].removeNode(true);
t.eImages[1].removeNode(true);
t.eImages[2].removeNode(true);
if(iMode==1){
t.eImages[3].removeNode(true);
t.eImages[4].removeNode(true);
t.eImages[5].removeNode(true);
}
break;
case 1:
t.eImages[0].removeNode(true);
if((iMode==1)&&(t.iSubType!=2)){
t.eImages[1].removeNode(true);
}
break;
}
}
t.add=function(){
switch(t.iType){
case 0:
iLoop=iMode==0?3:6;
for(var iCount=0; iCount < iLoop; iCount++){
t.eImages[iCount]=AddImage('', 0);	
}
t.eImages[0].src=aiTextures[t.iTexture][0].src;
if(iMode==1){
t.eImages[3].src=aiTextures[t.iTexture][0].src;
t.eImages[3].style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
break;
case 1:
switch(t.iSubType){
case 0:
t.eImages[0]=AddImage(aiSprites[t.iTexture].src, 0);
if(iMode==1){
t.eImages[1]=AddImage(aiSprites[t.iTexture].src, 0);
t.eImages[1].style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
break;
case 1:
t.eImages[0]=AddImage(aiItems[t.iTexture].src, 0);
if(iMode==1){
t.eImages[1]=AddImage(aiItems[t.iTexture].src, 0);
t.eImages[1].style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
break;
case 2:
t.eImages[0]=AddImage(aiCritters[t.iTexture].src, 0);
if(t.iTexture==0){
t.eImages[0].style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity=35);';
}
break;
case 3:
t.eImages[0]=AddImage(aiBullits[t.iBullit].src, 0);
if(iMode==1){
t.eImages[1]=AddImage(aiBullits[t.iBullit].src, 0);
t.eImages[1].style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
break;
}
}
};
}
function Vertex(){
var t=this;
t.fX=0;
t.fY=0;
t.fZ=0;
t.translate=function(){
t.fTransX=t.fX-vPosition.x;
t.fTransY=t.fY-vPosition.y;
t.fTransZ=t.fZ-vPosition.z;
};
t.rotate=function(){
t.fRotateZ=(t.fTransZ*Math.cos(vPosition.r))-(t.fTransX*Math.sin(vPosition.r));
t.fRotateX=(t.fTransZ*Math.sin(vPosition.r))+(t.fTransX*Math.cos(vPosition.r));
t.fRotateY=t.fTransY;
};
t.init=function(fX, fY, fZ){
t.fTransX=fX;
t.fTransY=fY;
t.fTransZ=fZ;
};
t.to2dPoint=function(){
t.fX2d=((iScreenWidth/2)/t.fRotateZ)*t.fRotateX;
t.fY2d=((iScreenWidth/2)/t.fRotateZ)*t.fRotateY;
};
}
function Game(){
var t=this;
t.iLife=100;
t.iArmor=25;
t.iScore=0;
t.iCurrentWeapon=0;
t.iWeaponFire=0;
t.iDrawnLife=-1;
t.iDrawnArmor=-1;
t.iDrawnAmmo=-1;
t.iDrawnScore=-1;
t.iDrawnWeapon=-1;
t.aeLife=[];
t.aeArmor=[];
t.aeAmmo=[];
t.aeScore=[];
t.aWeapons=[];
t.init=function(){
for(var iCount=0; iCount < 3; iCount++){
t.aWeapons[iCount]=[];
t.aWeapons[iCount].bAvailable=iCount==2?0:1;
t.aWeapons[iCount].iAmmo=iCount*100;
t.aWeapons[iCount].iFireInterval=10;
t.aWeapons[iCount].iFireDuration=5;
}
t.eWeapon=AddImage('',999);
t.eWeapon.style.top=352;
t.eWeapon.style.left=256;
t.eWeapon.width=128;
t.eWeapon.height=128;
t.eCross=AddImage('c.gif',999);
t.eCross.style.top=224;
t.eCross.style.left=304;
t.eCross.width=32;
t.eCross.height=32;
};
t.setWeapon=function(iWeapon){
if(t.aWeapons[iWeapon].bAvailable){
t.iCurrentWeapon=iWeapon;
if(t.iWeaponFire > 0){
t.iWeaponFire=t.aWeapons[iCurrentWeapon].iFireDuration;
}
}
}
t.setFireState=function(bDown){
if(bDown){
t.iWeaponFire %=t.aWeapons[t.iCurrentWeapon].iFireInterval;
t.iWeaponFire++;
}else{
t.iWeaponFire=0;
}
};
t.drawHud=function(){
if(t.iDrawnLife!=t.iLife){
document.getElementById('hh').innerHTML=t.iLife;
t.iDrawnLife=t.iLife;
}
if(t.iDrawnArmor!=t.iArmor){
document.getElementById('hr').innerHTML=t.iArmor;
t.iDrawnArmor=t.iArmor;
}
if(t.iDrawnAmmo!=t.aWeapons[t.iCurrentWeapon].iAmmo){
document.getElementById('ha').innerHTML=t.aWeapons[t.iCurrentWeapon].iAmmo;
t.iDrawnAmmo=t.aWeapons[t.iCurrentWeapon].iAmmo;
}
if(t.iDrawnScore!=t.iScoe){
document.getElementById('hs').innerHTML=t.iScore;
t.iDrawnScore=t.iScore;
}
if((t.iWeaponFire > 0)&&(t.iWeaponFire < t.aWeapons[t.iCurrentWeapon].iFireDuration)&&
(((t.aWeapons[t.iCurrentWeapon].iAmmo > 0)&&(t.iCurrentWeapon > 0))||(t.iCurrentWeapon==0))){
if(t.iDrawnWeapon!=t.iCurrentWeapon+3){
t.eWeapon.src=aiWeapons[t.iCurrentWeapon+3].src;
t.iDrawnWeapon=t.iCurrentWeapon+3;
}
}else{
if(t.iDrawnWeapon!=t.iCurrentWeapon){
t.eWeapon.src=aiWeapons[t.iCurrentWeapon].src;
t.iDrawnWeapon=t.iCurrentWeapon;
}
}
};
}
function AddImage(sUrl, iZIndex){
var eImage=document.createElement('img');
eImage.src=sUrl;
eImage.style.position='absolute';
eImage.style.zIndex=iZIndex;
eImage.style.left=-999;
document.body.appendChild(eImage);
return eImage;
}
function SortByDistence(iObject1, iObject2){
if(iObject1.iType==2 || iObject2.iType==2){
return 0;
}else{
if(iObject1.fDistance > iObject2.fDistance){
return-1;
}else{
return 1;
}
}
}
function InRange(iValue1, iValue2, iDiff){
return(Math.abs(iValue1-iValue2)< iDiff);
}
function GetDiagonal(iObject1, iObject2){
return Math.sqrt(Math.pow(iObject1, 2)+Math.pow(iObject2, 2));
}
function GetInt12(sString, iIndex){
return(sString.charCodeAt(iIndex)-40)*64+sString.charCodeAt(iIndex+1)-40;
}
function GetBoolInt5(sString, iIndex){
iInt=sString.charCodeAt(iIndex)-40;
return [iInt > 31, iInt % 32];
}
function GetInt2Int10(sString, iIndex){
iInt=(sString.charCodeAt(iIndex)-40)*64+sString.charCodeAt(iIndex+1)-40;
return [Math.floor(iInt/1024), iInt % 1024];
}
function GetFloat(sString, iIndex){
return((sString.charCodeAt(iIndex)-40)*64+sString.charCodeAt(iIndex+1)-40)/10;
}
function PlaySound(s){
document.getElementById(s).stop();
document.getElementById(s).play();
}
function ClearLevel(){
for(iCount=0; iCount < iNrOfObjects; iCount++){
aoObjects[iCount].remove();
}
aoObjects=[];
iNrOfObjects=0;
}
function SwitchLevel(){
ClearLevel();
iLevel++;
if(iLevel > 3){
iMode++;
}
switch(iLevel){
case 2:
LoadLevel('h3', 50, 0);
LoadLevel('h6', 0, 0);
LoadLevel('l2', 25, 50);
break;
case 3:
LoadLevel('h2', 50, 0);
LoadLevel('h5', 0, 0);
LoadLevel('h3', 25, 50);
LoadLevel('l3', 25, 75);
break;
case 4:
LoadLevel('i1', 0, 50);
LoadLevel('i3', 50, 100);
LoadLevel('i2', 25, 150);
LoadLevel('i4', 100, 200);
LoadLevel('i3',-50, 250);
LoadLevel('l4', 25, 350);
break;
}
vPosition.x=25;
vPosition.y=1.5;
vPosition.z=-50;
vPosition.r=0;
document.getElementById('message').style.display='none';
iState=0;
}
function LoadLevel(sLevel, fOffsetX, fOffsetZ){
eElem=document.getElementById('ice');
if(iMode==1){
eEnvironment.eSun.style.display='';
eElem.style.backgroundColor='#FEF6CB';
eElem.style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity=70)';
}else{
eEnvironment.eSun.style.display='none';
eElem.style.backgroundColor='#FFFFFF';
eElem.style.filter='';
}
sString=alLevel[sLevel];
iCurIndex=0;
iNrOfObjectsNew=GetInt12(sString, iCurIndex);
iCurIndex+=2;
for(iCount=iNrOfObjects; iCount < iNrOfObjects+iNrOfObjectsNew; iCount++){
aoObjects[iCount]=new Object();
vTemp=GetBoolInt5(sString, iCurIndex);
iCurIndex++;
aoObjects[iCount].iType=vTemp[0]?1:0;
aoObjects[iCount].iTexture=vTemp[1];
if(vTemp[0]){
vTemp=GetInt2Int10(sString, iCurIndex); iCurIndex+=2;
aoObjects[iCount].iSubType=vTemp[0];
if(aoObjects[iCount].iSubType > 0){
aoObjects[iCount].iSubType--;
}
aoObjects[iCount].fWidth=vTemp[1]/10;
aoObjects[iCount].fHeight=GetFloat(sString, iCurIndex); iCurIndex+=2;
aoObjects[iCount].avVerts[0].fX=aoObjects[iCount].avVerts[1].fX=GetFloat(sString, iCurIndex)+fOffsetX; iCurIndex+=2;
aoObjects[iCount].avVerts[0].fY=aoObjects[iCount].avVerts[1].fY=GetFloat(sString, iCurIndex); iCurIndex+=2;
aoObjects[iCount].avVerts[0].fZ=aoObjects[iCount].avVerts[1].fZ=-1*GetFloat(sString, iCurIndex)+fOffsetZ; iCurIndex+=2;
aoObjects[iCount].avVerts[1].fY+=aoObjects[iCount].fHeight;
switch(aoObjects[iCount].iSubType){
case 0: 
switch(aoObjects[iCount].iTexture){
case 0:
aoObjects[iCount].fWidth=1.19;
aoObjects[iCount].fHeight=2;
break;
case 1:
aoObjects[iCount].fWidth=1;
aoObjects[iCount].fHeight=2;
aoObjects[iCount].avVerts[0].fY=0.5;
break;
case 2:
aoObjects[iCount].fWidth=8;
aoObjects[iCount].fHeight=4;
break;
}
break;
case 1: 
switch(aoObjects[iCount].iTexture){
case 0:
aoObjects[iCount].fWidth=1.24;
aoObjects[iCount].fHeight=1;
break;
case 1:
aoObjects[iCount].fWidth=1.24;
aoObjects[iCount].fHeight=1;
break;
case 2:
aoObjects[iCount].fWidth=1.29;
aoObjects[iCount].fHeight=1.5;
break;
case 3:
aoObjects[iCount].fWidth=1;
aoObjects[iCount].fHeight=1;
break;
case 4:
aoObjects[iCount].fWidth=1.58;
aoObjects[iCount].fHeight=4;
break;
}
break;
case 2: 
switch(aoObjects[iCount].iTexture){
case 0:
aoObjects[iCount].fWidth=1;
aoObjects[iCount].fHeight=0.5;
break;
case 1:
aoObjects[iCount].fWidth=0.91;
aoObjects[iCount].fHeight=2.5;
break;
case 2:
aoObjects[iCount].fWidth=1.24;
aoObjects[iCount].fHeight=1;
break;
}
break;
}
if(aoObjects[iCount].iSubType==0){
aoObjects[iCount].iLife=aEnemyTypes[aoObjects[iCount].iTexture].iLife;
aoObjects[iCount].bActive=0;
aoObjects[iCount].iFireCount=0;
}
}else{
aoObjects[iCount].fHeight=GetFloat(sString, iCurIndex); iCurIndex+=2;
aoObjects[iCount].avVerts[0].fX=aoObjects[iCount].avVerts[1].fX=GetFloat(sString, iCurIndex)+fOffsetX; iCurIndex+=2;
aoObjects[iCount].avVerts[0].fY=aoObjects[iCount].avVerts[1].fY=GetFloat(sString, iCurIndex); iCurIndex+=2;
aoObjects[iCount].avVerts[0].fZ=aoObjects[iCount].avVerts[1].fZ=-1*GetFloat(sString, iCurIndex)+fOffsetZ; iCurIndex+=2;
aoObjects[iCount].avVerts[1].fY+=aoObjects[iCount].fHeight;
aoObjects[iCount].avVerts[2].fX=aoObjects[iCount].avVerts[3].fX=GetFloat(sString, iCurIndex)+fOffsetX; iCurIndex+=2;
aoObjects[iCount].avVerts[2].fY=aoObjects[iCount].avVerts[3].fY=GetFloat(sString, iCurIndex); iCurIndex+=2;
aoObjects[iCount].avVerts[2].fZ=aoObjects[iCount].avVerts[3].fZ=-1*GetFloat(sString, iCurIndex)+fOffsetZ; iCurIndex+=2;
aoObjects[iCount].avVerts[3].fY+=aoObjects[iCount].fHeight;
var fNormalX=(aoObjects[iCount].avVerts[2].fZ-aoObjects[iCount].avVerts[0].fZ);
var fNormalZ=-1*(aoObjects[iCount].avVerts[2].fX-aoObjects[iCount].avVerts[0].fX);
aoObjects[iCount].fNormalX=fNormalX/GetDiagonal(fNormalZ, fNormalX);
aoObjects[iCount].fNormalZ=fNormalZ/GetDiagonal(fNormalZ, fNormalX);
}
aoObjects[iCount].bVisible=-1;
aoObjects[iCount].add();
}
iNrOfObjects+=iNrOfObjectsNew;
}
function Init(){
eEnvironment.init();
for(var iCount=0; iCount < 3; iCount++){
aiSprites[iCount]=new Image();
aiSprites[iCount].src='s'+iCount+'.gif';
}
for(var iCount=0; iCount < 3; iCount++){
aiCritters[iCount]=new Image();
aiCritters[iCount].src='c'+iCount+'.gif';
}
for(var iCount=0; iCount < 5; iCount++){
aiItems[iCount]=new Image();
aiItems[iCount].src='i'+iCount+'.gif';
}
for(var iCount=0; iCount < 6; iCount++){
aiWeapons[iCount]=new Image();
aiWeapons[iCount].src='g'+iCount+'.gif';
}
for(var iCount=0; iCount < 2; iCount++){
aiBullits[iCount]=new Image();
aiBullits[iCount].src='b'+iCount+'.gif';
}
for(var iCount=0; iCount < 8; iCount++){
aiTextures[iCount]=[];
for(var iCount2=0; iCount2 < 5; iCount2++){
aiTextures[iCount][iCount2]=new Image();
iSubCount=iCount;
if((iCount > 0)&&(iCount < 3)&&(iCount2 > 0)){iSubCount=0;}
if((iCount > 3)&&(iCount < 6)&&(iCount2 > 0)){iSubCount=3;}
aiTextures[iCount][iCount2].src='t'+iSubCount+iCount2+'.gif';
}
}
for(var iCount=0; iCount < 255; iCount++){
aKeys[iCount]=[];
aKeys[iCount].bDown=0;
}
for(var iCount=0; iCount < 3; iCount++){
aEnemyTypes[iCount]=[];
}
aEnemyTypes[0].iLife=5;
aEnemyTypes[0].iWeapon=1;
aEnemyTypes[0].iInterval=30;
aEnemyTypes[0].iScore=10;
aEnemyTypes[1].iLife=10;
aEnemyTypes[1].iWeapon=0;
aEnemyTypes[1].iInterval=30;
aEnemyTypes[1].iScore=20;
aEnemyTypes[2].iLife=15;
aEnemyTypes[2].iWeapon=1;
aEnemyTypes[2].iInterval=15;
aEnemyTypes[2].iScore=40;
LoadLevel('h1', 50, 0);
LoadLevel('h4', 0, 0);
LoadLevel('l1', 25, 50);
gGame.init();
for(var iCount=0; iCount < 2; iCount++){
aWeaponTypes[iCount]=[];
}
aWeaponTypes[0].iDamage=1;
aWeaponTypes[0].iSpeed=0.75;
aWeaponTypes[1].iDamage=1;
aWeaponTypes[1].iSpeed=1.5;
Update();
Draw();
window.setInterval('Update()', 10);
window.focus();
window.setTimeout("document.getElementById('message').style.display='none';", 10000);
}
function Update(){
if(iState==1){
return;
}
if(iUpdateCount < 10){
iUpdateCount++;
}else{
iUpdateCount=0;
var dDate=new Date();
var iFinish=dDate.getTime();
iLastFps=iFinish;
iFps=0;
}
if(aKeys[87].bDown || aKeys[83].bDown || aKeys[65].bDown || aKeys[68].bDown){
var aMovement=new Vertex();
aMovement.init(0,0,0);
aMovement.fTransZ+=iSpeed*aKeys[87].bDown;
aMovement.fTransZ-=iSpeed*aKeys[83].bDown;
aMovement.fTransX+=iSpeed*aKeys[65].bDown;
aMovement.fTransX-=iSpeed*aKeys[68].bDown;
aMovement.rotate();
var iIndex=iNrOfObjects-1;
while((aoObjects[iIndex].iType==1)&&(aoObjects[iIndex].iSubType==2)){
iIndex--;
}
var iCol=aoObjects[iIndex].checkCollision(aMovement.fRotateX, aMovement.fRotateZ);
if(iCol==1){
vPosition.z+=aMovement.fRotateZ;
vPosition.x-=aMovement.fRotateX;
if(aKeys[87].bDown || aKeys[65].bDown){
fBobAngle+=30;
fBobAngle %=360;
}else{
fBobAngle-=30;
fBobAngle %=360;
}
vPosition.y=1+Math.sin(fBobAngle*fPiOver180)*0.4;
}else if(iCol==-1){
aoObjects[iIndex].remove();
aoObjects.splice(iIndex, 1);
iNrOfObjects--;
}
}
if((aKeys[37].bDown)||(aKeys[39].bDown)){
vPosition.r+=iSpeed/6*aKeys[37].bDown;
vPosition.r-=iSpeed/6*aKeys[39].bDown;
vPosition.r %=(Math.PI*2);
if(vPosition.r < 0){
vPosition.r+=Math.PI*2
}
}
if(aKeys[49].bDown){
gGame.setWeapon(0);
}
if(aKeys[50].bDown){
gGame.setWeapon(1);
}
if(aKeys[51].bDown){
gGame.setWeapon(2);
}
if(aKeys[52].bDown){
}
gGame.setFireState(aKeys[32].bDown);
if((gGame.iWeaponFire==1)&&(gGame.iCurrentWeapon > 0)&&(gGame.aWeapons[gGame.iCurrentWeapon].iAmmo > 0)){
aoObjects[iNrOfObjects]=new Object();
aoObjects[iNrOfObjects].fHeight=1;
aoObjects[iNrOfObjects].fWidth=1;
aoObjects[iNrOfObjects].iType=1;
aoObjects[iNrOfObjects].iSubType=3;							
aoObjects[iNrOfObjects].iEnemy=0;
aoObjects[iNrOfObjects].iBullit=gGame.iCurrentWeapon-1;	
aoObjects[iNrOfObjects].fTransX=Math.sin(vPosition.r);
aoObjects[iNrOfObjects].fTransZ=Math.cos(vPosition.r);
aoObjects[iNrOfObjects].avVerts[0].fX=vPosition.x-aoObjects[iNrOfObjects].fTransX;
aoObjects[iNrOfObjects].avVerts[0].fY=vPosition.y*0.65;
aoObjects[iNrOfObjects].avVerts[0].fZ=vPosition.z+aoObjects[iNrOfObjects].fTransZ;
aoObjects[iNrOfObjects].add();
iNrOfObjects++;
if(gGame.iCurrentWeapon>0){PlaySound('sw'+gGame.iCurrentWeapon);}
gGame.aWeapons[gGame.iCurrentWeapon].iAmmo--;
}
for(var iCount=0; iCount < iNrOfObjects; iCount++){
if((aoObjects[iCount].iType==1)&&(aoObjects[iCount].iSubType==3)){
aoObjects[iCount].avVerts[0].fX-=aoObjects[iCount].fTransX/1.5;
aoObjects[iCount].avVerts[0].fZ+=aoObjects[iCount].fTransZ/1.5;
}
}
for(var iCount=0; iCount < iNrOfObjects; iCount++){
aoObjects[iCount].avVerts[0].translate();
aoObjects[iCount].avVerts[0].rotate();
aoObjects[iCount].avVerts[0].to2dPoint();
aoObjects[iCount].avVerts[1].translate();
aoObjects[iCount].avVerts[1].rotate();
aoObjects[iCount].avVerts[1].to2dPoint();
if(aoObjects[iCount].iType==0){
aoObjects[iCount].avVerts[2].translate();
aoObjects[iCount].avVerts[2].rotate();
aoObjects[iCount].avVerts[2].to2dPoint();
aoObjects[iCount].avVerts[3].translate();
aoObjects[iCount].avVerts[3].rotate();
aoObjects[iCount].avVerts[3].to2dPoint();
}
}
for(var iCount=0; iCount < iNrOfObjects; iCount++){
if(aoObjects[iCount].iType==0){
aoObjects[iCount].fDistance=GetDiagonal((aoObjects[iCount].avVerts[0].fRotateX+aoObjects[iCount].avVerts[2].fRotateX)/2,(aoObjects[iCount].avVerts[0].fRotateZ+aoObjects[iCount].avVerts[2].fRotateZ)/2);
}else{
aoObjects[iCount].fDistance=GetDiagonal(aoObjects[iCount].avVerts[0].fRotateX, aoObjects[iCount].avVerts[0].fRotateZ);
}
if((aoObjects[iCount].iType==1)&&(aoObjects[iCount].iSubType==0)&&(aoObjects[iCount].fDistance < 40)){
aoObjects[iCount].bActive=1;
}
if(aoObjects[iCount].bActive){
fBlaX=aoObjects[iCount].avVerts[0].fX-vPosition.x;
fBlaZ=aoObjects[iCount].avVerts[0].fZ-vPosition.z;
iProd2=GetDiagonal(fBlaZ, fBlaX);
fBlaX/=iProd2*10;
fBlaZ/=iProd2*10;
iSpeed=aoObjects[iCount].iTexture/2+1;
aoObjects[iCount].avVerts[0].fX-=(fBlaX*iSpeed);
aoObjects[iCount].avVerts[0].fZ-=(fBlaZ*iSpeed);
aoObjects[iCount].iFireCount++;
if(aoObjects[iCount].iFireCount > aEnemyTypes[aoObjects[iCount].iTexture].iInterval){
aoObjects[iCount].iFireCount=0;
aoObjects[iNrOfObjects]=new Object();
aoObjects[iNrOfObjects].fHeight=1;
aoObjects[iNrOfObjects].fWidth=1;
aoObjects[iNrOfObjects].iType=1;
aoObjects[iNrOfObjects].iSubType=3;							
aoObjects[iNrOfObjects].iEnemy=1;
aoObjects[iNrOfObjects].iBullit=aEnemyTypes[aoObjects[iCount].iTexture].iWeapon;	
aoObjects[iNrOfObjects].fTransX=aoObjects[iCount].avVerts[0].fX-vPosition.x;
aoObjects[iNrOfObjects].fTransZ=aoObjects[iCount].avVerts[0].fZ-vPosition.z;
iProd=GetDiagonal(aoObjects[iNrOfObjects].fTransZ, aoObjects[iNrOfObjects].fTransX);
aoObjects[iNrOfObjects].fTransX/=iProd;
aoObjects[iNrOfObjects].fTransZ/=iProd;
aoObjects[iNrOfObjects].fTransZ*=-1;
aoObjects[iNrOfObjects].avVerts[0].fX=aoObjects[iCount].avVerts[0].fX;
aoObjects[iNrOfObjects].avVerts[0].fY=aoObjects[iCount].avVerts[0].fY+0.65;
aoObjects[iNrOfObjects].avVerts[0].fZ=aoObjects[iCount].avVerts[0].fZ;
aoObjects[iNrOfObjects].add();
iNrOfObjects++;
PlaySound('sw1');
}
}
if((aoObjects[iCount].iType==1)&&(aoObjects[iCount].iSubType==3)){
if((aoObjects[iCount].iEnemy!=0)&&(InRange(vPosition.x, aoObjects[iCount].avVerts[0].fX, 1))&& 
(InRange(vPosition.z, aoObjects[iCount].avVerts[0].fZ, 1))){
gGame.iArmor-=aWeaponTypes[aoObjects[iCount].iBullit].iDamage;
PlaySound('sh');
if(gGame.iArmor < 0){
gGame.iLife+=gGame.iArmor;
gGame.iArmor=0;
}
aoObjects[iCount].remove();
aoObjects.splice(iCount, 1);
iNrOfObjects--;
iCount--;
}else if(aoObjects[iCount].fDistance > 100){
aoObjects[iCount].remove();
aoObjects.splice(iCount, 1);
iNrOfObjects--;
iCount--;
}else{
bNotFound=1;
for(var iCountObject=0; iCountObject < iNrOfObjects && bNotFound; iCountObject++){
if((iCount!=iCountObject)&&(aoObjects[iCount].iEnemy!=1)&&(InRange(aoObjects[iCountObject].avVerts[0].fX, aoObjects[iCount].avVerts[0].fX, 1))&& 
(InRange(aoObjects[iCountObject].avVerts[0].fZ, aoObjects[iCount].avVerts[0].fZ, 1))){
switch(aoObjects[iCountObject].iType){
case 0:
aoObjects[iCount].remove();
aoObjects.splice(iCount, 1);
iNrOfObjects--;
iCount--;
bNotFound=0;
break;
case 1:
if(aoObjects[iCountObject].iSubType==0){
aoObjects[iCountObject].iLife-=aWeaponTypes[aoObjects[iCount].iBullit].iDamage;
PlaySound('sh');
if(aoObjects[iCountObject].iLife <=0){
gGame.iScore+=aEnemyTypes[aoObjects[iCountObject].iTexture].iScore;
aoObjects[iCountObject].remove();
aoObjects.splice(iCountObject, 1);
iCountObject--;
if(iCountObject < iCount){
iCount--;
}
iNrOfObjects--;
}
aoObjects[iCount].remove();
aoObjects.splice(iCount, 1);
iCount--;
iNrOfObjects--;
bNotFound=0;
}
break;
}
}
}
}
}
}
aoObjects.sort(SortByDistence);
}
function Draw(){
if(iState==0){
iFps++;
eEnvironment.draw();
var iDrawn=0;
for(var iCount=0; iCount < iNrOfObjects; iCount++){
if(aoObjects[iCount].iType==0){
var fDotProduct=(vPosition.x*aoObjects[iCount].fNormalX+vPosition.z*aoObjects[iCount].fNormalZ)-(aoObjects[iCount].fNormalX*aoObjects[iCount].avVerts[0].fX+aoObjects[iCount].fNormalZ*aoObjects[iCount].avVerts[0].fZ);
if((aoObjects[iCount].avVerts[0].fRotateZ>0)&&(aoObjects[iCount].avVerts[2].fRotateZ>0)&&(aoObjects[iCount].avVerts[1].fRotateZ>0)&&(aoObjects[iCount].avVerts[3].fRotateZ>0)&&
(((aoObjects[iCount].avVerts[0].fX2d>-iZoom)&&(aoObjects[iCount].avVerts[0].fX2d<iZoom))||((aoObjects[iCount].avVerts[2].fX2d>-iZoom)&&(aoObjects[iCount].avVerts[2].fX2d<iZoom)))&&(fDotProduct>0)){
aoObjects[iCount].draw();
aoObjects[iCount].setVisible(1);
aoObjects[iCount].setZ(iCount+10);
iDrawn++;
}else{
aoObjects[iCount].setVisible(0);
}
}else{
if(aoObjects[iCount].avVerts[0].fRotateZ > 0){
aoObjects[iCount].draw();
aoObjects[iCount].setZ(iCount+10);
aoObjects[iCount].setVisible(1);
}else{
aoObjects[iCount].setVisible(0);
}
}
}
gGame.drawHud();
}
window.setTimeout('Draw()',0);
}
function KeyDownHandler(e){
if (!e) { e = event; }
var key = parseInt(e.charCode || e.keyCode);
alert (key);
aKeys[key].bDown=1;
}
function KeyUpHandler(e){
if (!e) { e = event; }
var key = parseInt(e.charCode || e.keyCode);
aKeys[key].bDown=0;
}
