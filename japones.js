// t = "ka,ki,ku,ke,ko,sa,si,shi,su,se,so,za,zi,zu,dzu,ze,zo,ta,ti,tu,tsu,te,to,da,di,ji,dzu,de,do,na,ni,nu,ne,no,ha,hi,hu,he,ho,ba,bi,bu,be,bo,pa,pi,pu,pe,po,ma,mi,mu,me,mo,ya,yu,yo,wa,wo,n".split(",")

t = "a i u e o ka ki ku ke ko sa si shi su se so za zi zu dzu ze zo ta ti chi tu tsu te to da di ji du dzu de do na ni nu ne no ha hi hu he ho ba bi bu be bo pa pi pu pe po ma mi mu me mo ya yu yo wa wo n".split(" ")
hir = "あいうえおかきくけこさししすせそざじずずぜぞたちちつつてとだぢぢづづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよわをん".split("")
kan = "アイウエオカキクケコサシシスセソザジズズゼゾタチチツツテトダヂヂヅヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨワヲン".split("")

s = ""


for(i=0;i<100;i++){
	r = parseInt(Math.random() * (t.length - 0) + 0);
	s+= t[r]+" "
}

function toKan(e){ return kan[t.indexOf(e)] }
function toHir(e){ return hir[t.indexOf(e)] }
