uses eqs;

var
  p0: Peq0;


begin
 p0:=new(Peq2,init);

  with p0^ do begin
   input;
   solve;
  end;
  dispose(p0, done);

  writeln('Size of real: ', sizeof(real));
  writeln('Size of "a" : ', sizeof(TEq2));
  writeln('Size of "a" : ', sizeof(TEq1));
  writeln('Size of "a" : ', sizeof(TEq0));
readln();
end.
